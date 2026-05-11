
import { Schema, model } from 'mongoose';

export interface ICategory {
  title: string;
  slug: string;
  description?: string;
}

const categorySchema = new Schema<ICategory>(
  {
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
  },
  {
    timestamps: true,
  }
);

const Category = model<ICategory>('Category', categorySchema);

export default Category;