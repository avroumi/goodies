import { supabase } from "../config/supabase.js";
import { AppError } from "../utils/AppError.js";

const transactionsTable = supabase.from("spend-transaction");

export const gettAlltransactionById = async (budgetId) => {
  const { data, error, status } = await transactionsTable
    .select()
    .eq("budget_id", budgetId);
  if (error) {
    throw new AppError(error.message, status);
  }
  return data;
};

console.log(await gettAlltransactionById(1));

export const createTransaction = async (transactionData) => {
  const { data, error, status } = await transactionsTable
    .insert(transactionData)
    .select();

  if (error) {
    throw new AppError(error.message, status);
  }
  return data;
};
