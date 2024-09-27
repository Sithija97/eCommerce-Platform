import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { corsOptions } from "./config/cors-options.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { logger } from "./middleware/logger.js";
import { conncetDB } from "./config/db.js";
import { databaseSeeder } from "./dashboardSeeder.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;

conncetDB();

app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(errorHandler);

//database seeder routes
// app.use("/api/seed", databaseSeeder);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
