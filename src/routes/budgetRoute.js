import { schemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { createBudgetSChema } from "../schema/budgetSchema.js";
import { createBudgetController } from "../controllers/budgetController.js";
import { Router } from "express";
import { schemaMiddleware } from "../middlewares/schemaMiddleware.js";
import {
  idBudgetSChema,
  createTransactionSchema,
} from "../schema/transactionSchema.js";
import {
  createTransactionController,
  gettAlltransactionByIdController,
} from "../controllers/transactionController.js";

import { Router } from "express";

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

export default router;
