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
    .eq("month", month)
    .single();
  if (error) {
    throw new AppError(error.message, status);
  }
  return data;
};

export const getBudgettByid = async (budgetId) => {
  const { data, error, status } = await budget
    .select()
    .eq("id", budgetId)
    .maybeSingle();

  if (error) {
    throw new AppError(error.message, status);
  }
  return data;
};

export const getAllBudgetByQuery = async (filter) => {
  let query = budget.select();
  if (filter.unit) {
    query = query.eq("unit", filter.unit);
  }
  if (filter.month) {
    query = query.eq("month", filter.month);
  }
  if (filter.benefitType) {
    query = query.eq("benefitType", filter.benefitType);
  }

  const { data, error, status } = await query;
  if (error) {
    throw new AppError(error.message, status);
  }
  return data;
};
