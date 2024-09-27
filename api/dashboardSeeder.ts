import express from "express";
import AsynHandler from "express-async-handler";
import { User } from "./models/user.js";
import { users } from "./test-data/user.js";
import { Product } from "./models/product.js";
import { products } from "./test-data/product.js";

const databaseSeeder = express.Router();

databaseSeeder.post(
  "/users",
  AsynHandler(async (req, res) => {
    await User.deleteMany({});
    const UserSeeder = await User.insertMany(users);
    res.send({ UserSeeder });
  })
);

databaseSeeder.get(
  "/products",
  AsynHandler(async (req, res) => {
    await Product.deleteMany({});
    const ProductSeeder = await product.insertMany(products);
    res.send({ ProductSeeder });
  })
);

export { databaseSeeder };
