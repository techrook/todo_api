import { body, param } from "express-validator";

class TodoValidator {
  checkCreateTodo() {
    return [
      body("id")
        .optional()
        .isUUID(4)
        .withMessage("the value should be UUID v4"),
      body("title")
        .notEmpty()
        .withMessage("the title value should not be empty"),
      body("completed")
        .optional()
        .isBoolean()
        .withMessage("the value should be boolean")
        .isIn([0, false])
        .withMessage("the value should be 0 or false"),
    ];
  }

  checkIdParam() {
    return [
      param("id")
        .notEmpty()
        .withMessage("The value should not be empty")
        .isUUID(4)
        .withMessage("The value should be UUID v4"),
    ];
  }
}

export default new TodoValidator();
