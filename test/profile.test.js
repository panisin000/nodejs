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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const app_1 = __importDefault(require("../src/app"));
const supertest_1 = __importDefault(require("supertest"));
const db_1 = __importDefault(require("../src/db"));
(0, globals_1.describe)("profiles", () => {
    (0, globals_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield db_1.default.$transaction([
            db_1.default.studentProfile.deleteMany(),
            db_1.default.user.deleteMany()
        ]);
    }));
    (0, globals_1.test)("Post /api/v1/profiles", () => __awaiter(void 0, void 0, void 0, function* () {
        const registerRes = yield (0, supertest_1.default)(app_1.default).post("/api/v1/register").send({
            username: "mike569",
            password: "012345678",
        });
        console.log(registerRes.body.token);
        const res = yield (0, supertest_1.default)(app_1.default).put("/api/v1/profiles").send({
            "companyName": "ODDS",
            "jobTille": "Frontend Dev",
            "level": "7Senior"
        }).set("Authorization", "Bearer " + registerRes.body.token);
        (0, globals_1.expect)(res.statusCode).toEqual(200);
        (0, globals_1.expect)(res.body.token).toBeDefined();
    }));
});
