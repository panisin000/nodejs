"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.user.create({
            data: {
                username: "test",
                password: "qwerty",
                role: "STUDENT",
                // studenProfile: {
                //     create: {
                //         companyName: "PEA",
                //         jobTitle: "Eng",
                //         level: "7"
                //     }
                // }
            },
        });
        // await prisma.studenProfile.create({
        //     data: {
        //         companyName: "PEA",
        //         jobTitle: "Eng",
        //         level: "7",
        //         userId: "9422ae16-f9e4-4614-a943-50a94f3d494f"
        //     }
        // })
        // const user = await prisma.user.findUnique({
        //     where: {
        //         username: "mike"
        //     },
        //     include: {
        //         studentProfile: true
        //     }
        // });
        // console.log(user);
        // if (!user) {
        //     return;
        // }
        // const course = await prisma.course.create({
        //     data: {
        //         name: "TDD",
        //         description: "The software .........",
        //     }
        // });
        // console.log(course);
        // await prisma.studentOnCourse.create({
        //     data: {
        //         userId: user.id,
        //         courseId: course.id
        //     }
        // });
        // await prisma.studentProfile.create({
        //     data: {
        //       companyName: "DODS",
        //       jobTitle: "Hello World!",
        //       level: "UFO",
        //       userId: "9422ae16-f9e4-4614-a943-50a94f3d494f",
        //     },
        //   });
        // const user = await prisma.user.findUnique({
        //     where: {
        //         username: "mike"
        //     },
        //     include: {
        //         studentProfile: true
        //     }
        // });
        // console.log(user);
    });
}
main().finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
