import { Router } from "express";
import mongoose from "mongoose";
import { orders } from "./models";
import { shoppingcart } from "./models";

const router = Router();

mongoose.connect("mongodb://localhost:27017/e-commerce");

router.put("/:id", (request, response) => {
  shoppingcart
    .findById(request.params.id)
    .then(() => {
      orders.create(request.body);
    })
    .then(() => response.json({ created: true }))
    .catch(() => response.json({ created: false }));
});

router.get("/", (request, response) => {
  orders.find().then((data) => {
    response.json(data);
  });
});

router.get("/:id", (request, response) => {
  orders
    .create({
      name: request.body.name,
      price: request.body.price,
      quantity: request.body.quantity,
      customerAdress: request.body.customerAdress,
      totalPrice: request.body.totalPrice,
    })
    .then(() => response.json({ created: true }))
    .catch(() => response.json({ created: false }));
});

export default router;