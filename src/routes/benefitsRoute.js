import { Router } from "express";
import { schemaMiddleware } from "../middlewares/schemaMiddleware.js";
import {
  idSchema,
  benefitsSchema,
  updateBenefitSchema,
} from "../schema/benefitsSchema.js";
import {
  CreateBenefitController,
  getBenefitsByIdController,
  updateBenefitController,
} from "../controllers/benefitController.js";

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

router.patch(
  "/:soldierId/benefits",
  schemaMiddleware(idSchema, "params"),
  schemaMiddleware(updateBenefitSchema),
  updateBenefitController,
);
export default router;
