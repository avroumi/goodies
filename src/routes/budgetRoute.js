import { schemaMiddleware } from "../middlewares/schemaMiddleware.js";
import {
  createBudgetSChema,
  querySchemaBudget,
} from "../schema/budgetSchema.js";
import {
  createBudgetController,
  getAllBudgetByQueryController,
} from "../controllers/budgetController.js";
import { Router } from "express";
import {
  idBudgetSChema,
  createTransactionSchema,
} from "../schema/transactionSchema.js";
import {
  createTransactionController,
  gettAlltransactionByIdController,
} from "../controllers/transactionController.js";
const router = Router();

router.post("/", schemaMiddleware(createBudgetSChema), createBudgetController);

router.get(
  "/:id/transactions",
  schemaMiddleware(idBudgetSChema, "params"),
  gettAlltransactionByIdController,
);

router.post(
  "/:id/spend",
  schemaMiddleware(idBudgetSChema, "params"),
  schemaMiddleware(createTransactionSchema),
  createTransactionController,
);

router.get(
  "/",
  schemaMiddleware(querySchemaBudget, "query"),
  getAllBudgetByQueryController,
);
export default router;
