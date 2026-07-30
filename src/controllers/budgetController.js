import budgetService from "../services/budgetServices.js";

export const createBudgetController = async (req, res, next) => {
  try {
    const success = await budgetService.createBudgetService(req.body);
    res.status(201).json(success);
  } catch (error) {
    next(error);
  }
};

export const getAllBudgetByQueryController = async (req, res, next) => {
  try {
    const success = await budgetService.getAllBudgetByQueryService(req.query);
    res.status(200).json(success);
  } catch (error) {
    next(error);
  }
};
