import { AppError } from "../utils/AppError.js";

export const schemaMiddleware = (schema, target = "body") => {
  return (req, res, next) => {
    const result = schema.safeParse(req[target]);
    if (!result.success) {
      const issues = result.error.issues[0];
      throw new AppError(`${issues.path[0]}: ${issues.message}`, 400);
    }

    req[target] = result.data;

    next();
  };
};
