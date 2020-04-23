import mongoose from "mongoose";

export const categories = mongoose.model("categories", {
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  id: {
    type: Number,
  },
});

export const products = mongoose.model("products", {
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  categoryId: {
    type: Number,
  },
});

export const shoppingcart = mongoose.model("shoppingcart", {
  productId: {
    type: String,
  },
  amount: {
    type: Number,
  },
});

export const orders = mongoose.model("orders", {
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  amount: {
    type: Number,
  },
  customerAdress: {
    type: String,
  },
  totalPrice: {
    type: Number,
  },
});