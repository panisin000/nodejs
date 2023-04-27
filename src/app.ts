import express, { NextFunction, Request, Response } from "express";
import router from "./handler/user";

// const middleware1 = (req: Request, res: Response, next: NextFunction) => {
//   console.log("req param => ", req.params);
//   next();
// };
// const middleware2 = (req: Request, res: Response, next: NextFunction) => {
//   console.log("req method => ", req.method);
//   next();
// };
const app = express();

// app.use(middleware1);
// app.use(middleware2);

app.use(express.json());

app.use('/api/v1', router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("catch error!");
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