"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./handler/user"));
const student_1 = __importDefault(require("./handler/student"));
const profile_1 = __importDefault(require("./handler/profile"));
const zod_1 = require("zod");
const morgan_1 = __importDefault(require("morgan"));
const logger_1 = __importDefault(require("./util/logger"));
// const middleware1 = (req: Request, res: Response, next: NextFunction) => {
//   console.log("req param => ", req.params);
//   next();
// };
// const middleware2 = (req: Request, res: Response, next: NextFunction) => {
//   console.log("req method => ", req.method);
//   next();
// };
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev")); //"dev" "common"
// app.use(middleware1);
// app.use(middleware2);
// app.use(bodyParser.json())
app.use(express_1.default.json());
app.use("/api/v1", user_1.default);
app.use("/api/v1", student_1.default);
app.use("/api/v1", profile_1.default);
app.use((err, req, res, next) => {
    if (err instanceof zod_1.ZodError) {
        res.status(400).json({
            message: err
        });
        return;
    }
    console.log("catch error!", err);
    logger_1.default.error(err.message);
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
exports.default = app;
