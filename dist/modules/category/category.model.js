"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    description: {
        type: String,
        default: '',
    },
}, {
    timestamps: true,
});
const Category = (0, mongoose_1.model)('Category', categorySchema);
exports.default = Category;
//# sourceMappingURL=category.model.js.map