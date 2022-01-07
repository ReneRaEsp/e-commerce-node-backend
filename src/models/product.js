import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  description: {
    type: String,
    maxlength: 255,
  },
  price: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  state: {
    type: Number,
    default: 1,
  },
  categories: [
    {
      type: Schema.ObjectId,
      ref: "category",
    },
  ],
});

const Product = mongoose.model("product", productSchema);

export default Product;
