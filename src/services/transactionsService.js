import {
  gettAlltransactionById,
  createTransaction,
} from "../repositories/transactionRepository.js";
import { AppError } from "../utils/AppError.js";
import { getBudgettByid } from "../repositories/budgetRepositories.js";

const gettAlltransactionByIdService = async (budgetId) => {
  const budget = await getBudgettByid(budgetId);
  if (!budget) {
    throw new AppError("budget not found ", 404);
  }
  return await gettAlltransactionById(budgetId);
};

const createTransactionService = async (budgetId, transactionData) => {
  const budget = await getBudgettByid(budgetId);
  if (!budget) {
    throw new AppError("budget not found ", 404);
  }

  const allTransaction = await gettAlltransactionById(budgetId);
  let totalTransaction = 0;
  for (const transaction of allTransaction) {
    totalTransaction += transaction.amount;
  }

  const remainingAmount =
    budget.allocatedAmount - (totalTransaction + transactionData.amount);
  if (remainingAmount < 0) {
    throw new AppError(
      `error: you don't have more money : ${remainingAmount} `,
      400,
    );
  }
  const safeTransaction = {
    ...transactionData,
    budget_id: budgetId,
  };
  const transaction = await createTransaction(safeTransaction);

  return [transaction, remainingAmount];
};

export default { gettAlltransactionByIdService, createTransactionService };
