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
const db_1 = __importDefault(require("../db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const token_1 = require("../util/token");
const router = express_1.default.Router();
router.post("/register", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        console.log("username=", username);
        console.log("password=", password);
        const hashPassword = yield bcrypt_1.default.hash(password, 12);
        const user = yield db_1.default.user.create({
            data: {
                username,
                password: hashPassword,
            },
        });
        res.json({
            token: (0, token_1.generateToken)({ id: user.id }),
        });
    }
    catch (err) {
        console.error(err);
        next();
    }
}));
router.post("/login", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const found = yield db_1.default.user.findUnique({
            where: {
                username,
            },
        });
        console.log(found);
        if (!found) {
            res.status(401).json({
                message: "unauthorized",
            });
            return;
        }
        const valid = yield bcrypt_1.default.compare(password, found.password);
        if (!valid) {
            res.status(401).json({
                message: "unauthorized",
            });
            return;
        }
        res.status(200).json({
            token: (0, token_1.generateToken)({ id: found.id }),
        });
    }
    catch (err) {
        console.error(err);
        next(err);
    }
}));
exports.default = router;
