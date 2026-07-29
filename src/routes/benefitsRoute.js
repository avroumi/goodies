import { Router } from "express";
import { schemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { idSchema, benefitsSchema } from "../schema/benefitsSchema.js";
import {
  CreateBenefitController,
  getBenefitsByIdController,
} from "../controllers/benefitController";

const router = Router();

router.post(
  "/:soldierId/benefits",
  schemaMiddleware(idSchema, "params"),
  schemaMiddleware(benefitsSchema),
  CreateBenefitController,
);

router.get(
  "/:soldierId/benefits",
  schemaMiddleware(idSchema, "params"),
  getBenefitsByIdController,
);

export default router;
