import { z } from "zod";
import { AppError } from "../utils/AppError.js";

export const schemaMiddleware = (schema, target = "body") => {
  (req, res, next) => {
    const result = schema.safeParse(req[target]);
    if (!result.success) {
      const issues = result.error.issues;
      throw new AppError(`${issues.path[0]}: ${issues.message}`, 400);
    }
    next();
  };
};
