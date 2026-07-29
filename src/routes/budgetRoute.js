import { schemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { createBudgetSChema } from "../schema/budgetSchema.js";
import { createBudgetController } from "../controllers/budgetController.js";

import { Router } from "express";

const router = Router();

router.post("/", schemaMiddleware(createBudgetSChema), createBudgetController);

// router.get("/", (req, res) => {
//   res.end("hello");
// });

export default router;
