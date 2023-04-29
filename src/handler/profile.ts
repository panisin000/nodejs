import express from "express";
import { auth, logBody } from "../middleware";
import prisma from "../db";
import z from "zod";
import asyncHandler from "express-async-handler";
import logger from "../util/logger";

const router = express.Router();

router.get(
  "/profiles",
  auth,logBody,
  asyncHandler(async (req, res, next) => {
    const profile = await prisma.studentProfile.findUnique({
      where: {
        userId: req.user.id,
      },
    });

    throw new Error("Pongneng err!");

    const courses = await prisma.studentOnCourse.findMany({
      where: {
        userId: req.user.id,
      },
      include: {
        course: true,
      },
    });
    res.json({
      profile,
      courses,
    });
  })
);

const profileSchema = z.object({
  companyName: z.string(),
  jobTitle: z.string(),
  level: z.string(),
});

router.put("/profiles", auth,logBody, async (req, res, next) => {
  try {
    const { companyName, jobTitle, level } = profileSchema.parse(req.body);
    const profile = await prisma.studentProfile.upsert({
      where: {
        userId: req.user.id,
      },
      update: {
        companyName: companyName,
        jobTitle: jobTitle,
        level: level,
      },
      create: {
        companyName: companyName,
        jobTitle: jobTitle,
        level: level,
        userId: req.user.id,
      },
    });
    res.json({
      profile,
    });
  } catch (err) {
    logger.error(err);
    next(err);
  }
});

export default router;