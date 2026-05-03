"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoRouter = (0, express_1.Router)();
todoRouter.get('/all-todos', (req, res) => {
    res.json([
        {
            id: 1,
            todo: "this is dummy todo"
        }
    ]);
});
todoRouter.post('/create', (req, res) => {
    let data = req.body;
    console.log(data);
    res.json(data);
});
todoRouter.post('/delete/:id', (req, res) => {
    let id = req.params?.id;
    console.log(id);
    res.json({
        message: "todo delete successfully"
    });
});
todoRouter.get('/test', async (req, res) => {
    let id = await req.query;
    console.log(id);
    res.json({
        message: "successfully"
    });
});
exports.default = todoRouter;
//# sourceMappingURL=todo.route.js.map