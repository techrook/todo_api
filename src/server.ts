import express from "express";
import TodoController from "./controller/index.controller";
import DB from "./config/database.config";
import TodoValidator from "./validator/index.validator";
import Middleware from "./middlewares/index.middleware";
DB.sync()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((e: Error) => {
    console.log("Unable to connect to the database:", e);
  });

const app = express();
const port = 3456;

app.use(express.json());

app.post(
  "/add",
  TodoValidator.checkCreateTodo(),
  Middleware.handleValidationError,
  TodoController.create
);
app.get("/read", TodoController.readPagination);
app.get(
  "/read/:id",
  TodoValidator.checkIdParam(),
  Middleware.handleValidationError,
  TodoController.readById
);
app.put(
  "/update/:id",
  TodoValidator.checkIdParam(),
  Middleware.handleValidationError,
  TodoController.update
);
app.delete(
  "/delete/:id",
  TodoValidator.checkIdParam(),
  Middleware.handleValidationError,
  TodoController.delete
);
app.listen(port, () => {
  console.log(`server is running @${port} `);
});
