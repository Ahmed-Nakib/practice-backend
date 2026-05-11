import Category from "./category.model";

interface ICategoryPayload {
  title: string;
  slug: string;
  description?: string;
  image?: string;
}

const createCategory = async (payload: ICategoryPayload) => {
  return await Category.create(payload);
};

const getAllCategories = async () => {
  return await Category.find().sort({ createdAt: -1 });
};

const getSingleCategory = async (id: string) => {
  return await Category.findById(id);
};

const updateCategory = async (
  id: string,
  payload: Partial<ICategoryPayload>
) => {
  return await Category.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

const deleteCategory = async (id: string) => {
  return await Category.findByIdAndDelete(id);
};

const CategoryService = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};

export default CategoryService;