import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    maxlength: 50,
    trim: true
  },
  description: {
    type: String,
    maxlength: 255,
    trim: true
  },
  state: {
    type: Number,
    default: 1,
  },
  products: [
    {
      type: Schema.ObjectId,
      ref: "product",
    },
  ],
});

const Category = mongoose.model("category", categorySchema);

export default Category;
