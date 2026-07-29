import { z } from "zod";

export const idSchema = z.object({
  soldierId: z.coerce.number().int(),
});

export const benefitsSchema = z.object({
  unit: z.string(),
  benefitType: z.enum(["giftCard", "diningHall"]),
  details: z.object(),
  decisionReason: z.string(),
  budgetApproved: z.boolean(),
  startDate: z.optional(z.string()),
});

export const giftCArdSchema = z.object({
  cardProvider: z.string(),
  monthlyValue: z.number(),
  validMerchants: z.array(z.string()),
});

export const diningHallSchema = z.object({
  baseId: z.number(),
  kosherLevel: z.string(),
  mealTimes: z.array(z.string()),
});

export const updateBenefitSchema = z.object({
  benefitType: z.enum(["giftCard", "diningHall"]),
  details: z.object(),
  decisionReason: z.string(),
  budgetApproved: z.boolean(),
  decisionDate: z.optional(z.string()),
});
