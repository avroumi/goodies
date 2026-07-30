import transactionService from "../services/transactionsService.js";

export const createTransactionController = async (req, res, next) => {
  const { id } = req.params;
  try {
    const success = await transactionService.createTransactionService(
      id,
      req.body,
    );
    res.status(201).json({
      transaction: success.transaction,
      remainingAmount: success.remainingAmount,
    });
  } catch (error) {
    next(error);
  }
};

export const gettAlltransactionByIdController = async (req, res, next) => {
  const { id } = req.params;
  try {
    const success = await transactionService.gettAlltransactionByIdService(id);
    res.status(200).json({ success });
  } catch (error) {
    next(error);
  }
};
