import { Request, Response } from 'express';
declare const CategoryController: {
    createCategory: (req: Request, res: Response) => Promise<void>;
    getAllCategories: (req: Request, res: Response) => Promise<void>;
    getSingleCategory: (req: Request, res: Response) => Promise<void>;
    updateCategory: (req: Request, res: Response) => Promise<void>;
    deleteCategory: (req: Request, res: Response) => Promise<void>;
};
export default CategoryController;
//# sourceMappingURL=category.controller.d.ts.map