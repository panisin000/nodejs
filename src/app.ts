import express, { NextFunction, Request, Response } from "express";
import router from "./handler/user";
import studentRouter from "./handler/student";
import profileRouter from "./handler/profile";
import { ZodError } from "zod";
import morgan from "morgan";
import logger from "./util/logger";
// const middleware1 = (req: Request, res: Response, next: NextFunction) => {
//   console.log("req param => ", req.params);
//   next();
// };
// const middleware2 = (req: Request, res: Response, next: NextFunction) => {
//   console.log("req method => ", req.method);
//   next();
// };
const app = express();
app.use(morgan("dev")); //"dev" "common"
// app.use(middleware1);
// app.use(middleware2);
// app.use(bodyParser.json())
app.use(express.json());
app.use("/api/v1", router);
app.use("/api/v1", studentRouter);
app.use("/api/v1", profileRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

  if (err instanceof ZodError) {
    res.status(400).json({
      message: err
    });
    return;
  }
  console.log("catch error!", err);
  logger.error(err.message);
  res.status(500).json({
    message: "unecpected error",
  });
  res.end();
});

// app.get("/hello/:name", (req, res) => {
//   res.json({
//     name: req.params.name,
//     key: req.query.key,
//     foo: req.query.foo,
//   });
// });`

// app.post("/users", async (req, res) => {
//   await prisma.user.create({
//     data: {
//       username: "qwerty",
//       password: "shhhh!",
//     },
//   });
//   res.sendStatus(200);
// });

// app.get("/users", async (req, res) => {
//   const users = await prisma.user.findMany();
//   console.log(users);
//   res.json({
//     users,
//   })
// });
// app.put("/", (req, res) => { });
// app.delete("/", (req, res) => { });

export default app;
