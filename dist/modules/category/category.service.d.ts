interface ICategoryPayload {
    title: string;
    slug: string;
    description?: string;
    image?: string;
}
declare const CategoryService: {
    createCategory: (payload: ICategoryPayload) => Promise<import("mongoose").Document<unknown, {}, import("./category.model").ICategory, {}, import("mongoose").DefaultSchemaOptions> & import("./category.model").ICategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllCategories: () => Promise<(import("mongoose").Document<unknown, {}, import("./category.model").ICategory, {}, import("mongoose").DefaultSchemaOptions> & import("./category.model").ICategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getSingleCategory: (id: string) => Promise<(import("mongoose").Document<unknown, {}, import("./category.model").ICategory, {}, import("mongoose").DefaultSchemaOptions> & import("./category.model").ICategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateCategory: (id: string, payload: Partial<ICategoryPayload>) => Promise<(import("mongoose").Document<unknown, {}, import("./category.model").ICategory, {}, import("mongoose").DefaultSchemaOptions> & import("./category.model").ICategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteCategory: (id: string) => Promise<(import("mongoose").Document<unknown, {}, import("./category.model").ICategory, {}, import("mongoose").DefaultSchemaOptions> & import("./category.model").ICategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
export default CategoryService;
//# sourceMappingURL=category.service.d.ts.map