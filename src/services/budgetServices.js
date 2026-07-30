import {
  createBudget,
  getSameBudget,
  getAllBudgetByQuery,
} from "../repositories/budgetRepositories.js";
import { AppError } from "../utils/AppError.js";
import { gettAlltransactionById } from "../repositories/transactionRepository.js";

const createBudgetService = async (budgetData) => {
  const { unit, benefitType, month, ...rest } = budgetData;
  const duplicate = await getSameBudget(unit, benefitType, month);
  if (duplicate.length > 0) {
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

const getAllBudgetByQueryService = async (filter = {}) => {
  const budgets = await getAllBudgetByQuery(filter);
  if (!budgets) {
    return budgets;
  }
  const infoBudget = [];
  for (const budget of budgets) {
    const allTransaction = await gettAlltransactionById(budget.id);
    let spentAmount = 0;
    for (const transaction of allTransaction) {
      spentAmount += transaction.amount;
    }
    infoBudget.push({
      id: budget.id,
      unit: budget.unit,
      benefitType: budget.benefitType,
      month: budget.month,
      allocatedAmount: budget.allocatedAmount,
      spentAmount,
      remainingAmount: budget.allocatedAmount - spentAmount,
    });
  }
  return infoBudget;
};

export default { createBudgetService, getAllBudgetByQueryService };
