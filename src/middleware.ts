import { NextFunction, Request, Response } from "express";
import prisma from "./db";
import { verifyToken } from "./util/token";
import logger from "./util/logger";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    const bearer = req.headers.authorization;
    console.log(bearer);
    if (!bearer) {
        res.status(401).json({
            message: "unauthorized",
        });
        return;
    }

    const [, token] = bearer.split("Bearer ");
    if (!token) {
        res.status(401).json({
            message: "unauthorized",
        });
        return;
    }

    try {
        const payload = verifyToken(token);
        const { id } = payload;
        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        });
        if (!user) {
            res.status(401).json({
                message: "unauthorized",
            });
            return;
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(500).json({
            message: "oop! something went wrong",
        });
    }
};


export const logBody = async (req: Request, res: Response, next: NextFunction) => {
    logger.error(req.body);
    next();
};