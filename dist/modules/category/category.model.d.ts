export interface ICategory {
    title: string;
    slug: string;
    description?: string;
}
declare const Category: import("mongoose").Model<ICategory, {}, {}, {}, import("mongoose").Document<unknown, {}, ICategory, {}, import("mongoose").DefaultSchemaOptions> & ICategory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, ICategory>;
export default Category;
//# sourceMappingURL=category.model.d.ts.map