import { z } from "zod";

export const createBudgetSChema = z.object({
  unit: z.string(),
  benefitType: z.enum(["giftCard", "diningHall"]),
  month: z.string(),
  allocatedAmount: z.number(),
});
