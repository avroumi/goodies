import {
  createBenefits,
  getBenefitsById,
  updateBenefit,
} from "../repositories/welfareRecordRepository.js";
import { giftCArdSchema, diningHallSchema } from "../schema/benefitsSchema.js";
import { AppError } from "../utils/AppError.js";
import { isPrime, currentDayThisYear } from "../utils/primeNumber.js";

const createBenefitsService = async (soldierId, benefitsData) => {
  const soldierexist = await getBenefitsById(soldierId);
  console.log(soldierexist);
  if (soldierexist) {
    throw new AppError("Soldier has already a benefits", 409);
  }
  const { unit, benefitType, ...rest } = benefitsData;
  if (benefitType === "giftCard") {
    const resultSchema = giftCArdSchema.safeParse(benefitsData.details);
    if (!resultSchema.success) {
      throw new AppError("details not compatible", 400);
    }
  }
  if (benefitType === "diningHall") {
    const resultSchema = diningHallSchema.safeParse(benefitsData.details);
    if (!resultSchema.success) {
      throw new AppError("details not compatible", 400);
    }
  }
  const firstData = { unit, currentBenefitType: benefitType };
  const secondData = { benefitType, ...rest };

  const benefitId = await createBenefits(soldierId, firstData, secondData);
  return benefitId;
};

const getBenefitsByIdService = async (soldierId) => {
  const benefit = await getBenefitsById(soldierId);
  if (!benefit) {
    throw new AppError("benefit not Found", 404);
  }
  return benefit;
};

const updateBenefitService = async (soldierId, updatedData) => {
  const benefit = await getBenefitsByIdService(soldierId);
  const { decisionReason, benefitType, decisionDate, ...rest } = updatedData;

  const daythisYear = currentDayThisYear(decisionDate);
  if (isPrime(daythisYear)) {
    return { reverted: false, message: "hehehhe" };
  }

  if (benefitType === "giftCard") {
    const resultSchema = giftCArdSchema.safeParse(benefitsData.details);
    if (!resultSchema.success) {
      throw new AppError("details not compatible", 400);
    }
  }
  if (benefitType === "diningHall") {
    const resultSchema = diningHallSchema.safeParse(benefitsData.details);
    if (!resultSchema.success) {
      throw new AppError("details not compatible", 400);
    }
  }
  benefit.history[endDate] = new Date().toISOString();
  benefit.currentBenefitType = benefitType;
  benefit.history.push({
    startDate: new Date().toISOString(),
    endDate: null,
    decisionReason,
    benifitType,
    ...rest,
  });

  const result = await updateBenefit(soldierId, benefit);
  return {
    reverted: result,
    reason: decisionDate,
  };
};

export default {
  createBenefitsService,
  getBenefitsByIdService,
  updateBenefitService,
};
