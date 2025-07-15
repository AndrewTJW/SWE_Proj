import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  userId: { type: String, require: true, ref: "user" },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  offerPrice: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  date: { type: Number, required: true },
});

let Product = mongoose.models.product;

if (!Product) {
  Product = mongoose.model("product", productSchema);
}

export default Product;
