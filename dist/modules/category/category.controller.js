"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_service_1 = __importDefault(require("./category.service"));
const createCategory = async (req, res) => {
    try {
        const result = await category_service_1.default.createCategory(req.body);
        res.status(201).json({
            success: true,
            message: 'Category created successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const getAllCategories = async (req, res) => {
    try {
        const result = await category_service_1.default.getAllCategories();
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const getSingleCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await category_service_1.default.getSingleCategory(id);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await category_service_1.default.updateCategory(id, req.body);
        res.status(200).json({
            success: true,
            message: 'Category updated successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await category_service_1.default.deleteCategory(id);
        res.status(200).json({
            success: true,
            message: 'Category deleted successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const CategoryController = {
    createCategory,
    getAllCategories,
    getSingleCategory,
    updateCategory,
    deleteCategory,
};
exports.default = CategoryController;
//# sourceMappingURL=category.controller.js.map