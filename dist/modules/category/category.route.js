"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = __importDefault(require("./category.controller"));
const router = express_1.default.Router();
router.post('/', category_controller_1.default.createCategory);
router.get('/', category_controller_1.default.getAllCategories);
router.get('/:id', category_controller_1.default.getSingleCategory);
router.patch('/:id', category_controller_1.default.updateCategory);
router.delete('/:id', category_controller_1.default.deleteCategory);
exports.categoryRouter = router;
//# sourceMappingURL=category.route.js.map