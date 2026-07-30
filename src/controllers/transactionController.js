import transactionService from "../services/transactionsService.js";

export const createTransactionController = async (req, res, next) => {
  try {
    const success = await transactionService.createTransactionService(
      req.params,
      req.body,
    );
    res.status(201).json({
      transaction: success.transaction,
      remainingAmount: sucess.remainingAmount,
    });
  } catch (error) {
    next(error);
  }
};

export const gettAlltransactionByIdController = async (req, res, next) => {
  try {
    const success = await transactionService.gettAlltransactionByIdService(
      req.params,
    );
    res.status(200).json({ success });
  } catch (error) {
    next(error);
  }
};
