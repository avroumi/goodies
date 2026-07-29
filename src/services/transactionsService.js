import {
  gettAlltransactionById,
  createTransaction,
} from "../repositories/transactionRepository.js";
import { AppError } from "../utils/AppError.js";
import { getBudgettByid } from "../repositories/budgetRepositories.js";

const gettAlltransactionByIdService = async (budgetId) => {
  const transaction = await gettAlltransactionById(budgetId);
  if (!transaction) {
    throw new AppError("budget not found ", 404);
  }
  return transaction;
};

const createTransactionService = async (budgetId, transactionData) => {
  const allTransaction = await gettAlltransactionById(budgetId);
  let totalTransaction = 0;
  for (const tansaction of allTransaction) {
    totalTransaction += transaction.amount;
  }
  const budget = getBudgettByid(budgetId);

  valideOperaiton =
    budget.allocatedAmount < totalTransaction + transactionData.amount;
  remainingAmount =
    budget.alocateAmount - (totalTransaction + transactionData.amount);
  if (remainingAmount < 0) {
    throw new AppError(
      { error: "you don't have more money", remainingAmount },
      400,
    );
  }
  const transaction = await createTransaction(transactionData);

  return transaction;
};
