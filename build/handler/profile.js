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
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../middleware");
const db_1 = __importDefault(require("../db"));
const zod_1 = __importDefault(require("zod"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const logger_1 = __importDefault(require("../util/logger"));
const router = express_1.default.Router();
router.get("/profiles", middleware_1.auth, middleware_1.logBody, (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield db_1.default.studentProfile.findUnique({
        where: {
            userId: req.user.id,
        },
    });
    throw new Error("Pongneng err!");
    const courses = yield db_1.default.studentOnCourse.findMany({
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
})));
const profileSchema = zod_1.default.object({
    companyName: zod_1.default.string(),
    jobTitle: zod_1.default.string(),
    level: zod_1.default.string(),
});
router.put("/profiles", middleware_1.auth, middleware_1.logBody, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { companyName, jobTitle, level } = profileSchema.parse(req.body);
        const profile = yield db_1.default.studentProfile.upsert({
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
    }
    catch (err) {
        logger_1.default.error(err);
        next(err);
    }
}));
exports.default = router;
