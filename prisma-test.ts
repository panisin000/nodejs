import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    // await prisma.user.create({
    //     data: {
    //         username: "mike",
    //         password: "qwerty",
    //         role: "STUDENT",
    //         // studenProfile: {
    //         //     create: {
    //         //         companyName: "PEA",
    //         //         jobTitle: "Eng",
    //         //         level: "7"
    //         //     }
    //         // }
    //     }

    // })
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
    const user = await prisma.user.findUnique({
        where: {
            username: "mike"
        },
        include: {
            studentProfile: true
        }
    });
    console.log(user);

}

main().finally(async () => { await prisma.$disconnect(); })