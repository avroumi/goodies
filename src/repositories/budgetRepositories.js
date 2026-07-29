import { uint32 } from "zod";
import { supabase } from "../config/supabase.js";
import { AppError } from "../utils/AppError.js";

const budget = supabase.from("budget-allocation");

export const createBudget = async (budgetData) => {
  const { data, error, status } = await budget.insert(budgetData).select();
  if (error) {
    throw new AppError(error.message, status);
  }
  return data;
};

export const getSameBudget = async (unit, benefitType, month) => {
  const { data, error, status } = await budget
    .select()
    .eq("unit", unit)
    .eq("benefitType", benefitType)
    .eq("month", month);
  if (error) {
    throw new AppError(error.message, status);
  }
  return data;
};

export const getBudgettByid = async (budgetId) => {
  const { data, error, status } = await budget
    .select()
    .eq("budgetId", budgetId);

  if (error) {
    throw new AppError(error.message, status);
  }
  return data;
};
