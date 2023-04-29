import { describe, expect, test, beforeEach } from "@jest/globals";
import app from "../src/app";
import request from "supertest";
import prisma from "../src/db";

describe("Register", () => {
    beforeEach(async () => {
        await prisma.$transaction([
            prisma.user.deleteMany()]);
    });


    test("Post /api/v1/register", async () => {
        const res = await request(app).post("/api/v1/register").send({
            username: "mike55",
            password: "012345678",
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body.token).toBeDefined();
    });


});