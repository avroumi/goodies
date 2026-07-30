import z from "zod";

export const idBudgetSChema = z.object({
  id: z.coerce.number().int().positive(),
});

export const createTransactionSchema = z.object({
  amount: z.number().positive(),
  reason: z.string().optional(),
});
