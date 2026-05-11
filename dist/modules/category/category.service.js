"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_model_1 = __importDefault(require("./category.model"));
const createCategory = async (payload) => {
    return await category_model_1.default.create(payload);
};
const getAllCategories = async () => {
    return await category_model_1.default.find().sort({ createdAt: -1 });
};
const getSingleCategory = async (id) => {
    return await category_model_1.default.findById(id);
};
const updateCategory = async (id, payload) => {
    return await category_model_1.default.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
};
const deleteCategory = async (id) => {
    return await category_model_1.default.findByIdAndDelete(id);
};
const CategoryService = {
    createCategory,
    getAllCategories,
    getSingleCategory,
    updateCategory,
    deleteCategory,
};
exports.default = CategoryService;
//# sourceMappingURL=category.service.js.map