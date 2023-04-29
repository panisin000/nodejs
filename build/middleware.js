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
exports.logBody = exports.auth = void 0;
const db_1 = __importDefault(require("./db"));
const token_1 = require("./util/token");
const logger_1 = __importDefault(require("./util/logger"));
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const bearer = req.headers.authorization;
    console.log(bearer);
    if (!bearer) {
        res.status(401).json({
            message: "unauthorized",
        });
        return;
    }
    const [, token] = bearer.split("Bearer ");
    if (!token) {
        res.status(401).json({
            message: "unauthorized",
        });
        return;
    }
    try {
        const payload = (0, token_1.verifyToken)(token);
        const { id } = payload;
        const user = yield db_1.default.user.findUnique({
            where: {
                id,
            },
        });
        if (!user) {
            res.status(401).json({
                message: "unauthorized",
            });
            return;
        }
        req.user = user;
        next();
    }
    catch (err) {
        res.status(500).json({
            message: "oop! something went wrong",
        });
    }
});
exports.auth = auth;
const logBody = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.error(req.body);
    next();
});
exports.logBody = logBody;
