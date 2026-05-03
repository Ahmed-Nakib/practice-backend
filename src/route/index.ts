import { Router } from "express";
import app from "../app";
import todoRouter from "../modules/todo/todo.route";

export const router = Router();

router.use("/todo", todoRouter)
