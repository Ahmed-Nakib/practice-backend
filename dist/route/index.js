"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_route_1 = require("../modules/category/category.route");
const router = (0, express_1.Router)();
const routeList = [
    {
        prefix: "/category",
        route: category_route_1.categoryRouter,
    }
];
routeList.forEach((route) => {
    router.use(route.prefix, route.route);
});
exports.default = router;
//# sourceMappingURL=index.js.map