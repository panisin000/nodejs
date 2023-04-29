import { describe, expect, test, beforeEach } from "@jest/globals";
import app from "../src/app";
import request from "supertest";
import prisma from "../src/db";

describe("profiles", () => {
    beforeEach(async () => {
        await prisma.$transaction([
            prisma.studentProfile.deleteMany(),
            prisma.user.deleteMany()
        ]);
    });

    test("Post /api/v1/profiles", async () => {
        const registerRes = await request(app).post("/api/v1/register").send({
            username: "mike569",
            password: "012345678",
        });
        console.log(registerRes.body.token);
        const res = await request(app).put("/api/v1/profiles").send({
            "companyName": "ODDS",
            "jobTille": "Frontend Dev",
            "level": "7Senior"
        }).set("Authorization", "Bearer " + registerRes.body.token);
        expect(res.statusCode).toEqual(200);
        expect(res.body.token).toBeDefined();
    });


});