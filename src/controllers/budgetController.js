import budgetService from "../services/budgetServices.js";

export const createBudgetController = async (req, res, next) => {
  try {
    console.log(req.body);
    const success = await budgetService.createBudgetService(req.body);
    res.status(201).json(success);
  } catch (error) {
    next(error);
  }
};
