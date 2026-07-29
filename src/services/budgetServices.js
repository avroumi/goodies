import {
  createBudget,
  getSameBudget,
} from "../repositories/budgetRepositories.js";
import { AppError } from "../utils/AppError.js";

const createBudgetService = async (budgetData) => {
  const { unit, benefitType, month, ...rest } = budgetData;
  const duplicate = await getSameBudget(unit, benefitType, month);
  if (duplicate.length > 1) {
    throw new AppError("duplicate budget not allowed", 409);
  }
  const budget = await createBudget({
    unit,
    benefitType,
    month,
    ...rest,
  });
  return budget;
};

export default { createBudgetService };
