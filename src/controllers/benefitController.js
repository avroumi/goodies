import benefitService from "../services/benefitsService.js";

export const CreateBenefitController = async (req, res, next) => {
  const { soldierId } = req.params;
  try {
    const success = await benefitService.createBenefitsService(
      soldierId,
      req.body,
    );
    res.status(201).json(success);
  } catch (error) {
    next(error);
  }
};

export const getBenefitsByIdController = async (req, res, next) => {
  try {
    const success = await benefitService.getBenefitsByIdService(
      req.params.soldierId,
    );
    res.status(200).json(success);
  } catch (error) {
    next(error);
  }
};
