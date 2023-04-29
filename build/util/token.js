"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = "supersecret";
const generateToken = ({ id }) => {
    return jsonwebtoken_1.default.sign({ id }, secretKey, { expiresIn: "1d" });
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, secretKey);
};
exports.verifyToken = verifyToken;
// interface Person{
//   name: string;
// }
// interface Person{
//   age: number;
// }
