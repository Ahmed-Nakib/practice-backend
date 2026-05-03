"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const todo_route_1 = __importDefault(require("../modules/todo/todo.route"));
exports.router = (0, express_1.Router)();
exports.router.use("/todo", todo_route_1.default);
//# sourceMappingURL=index.js.map