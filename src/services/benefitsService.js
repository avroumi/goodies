import {
  createBenefits,
  getBenefitsById,
} from "../repositories/welfareRecordRepository.js";
import { giftCArdSchema, diningHallSchema } from "../schema/benefitsSchema.js";
import { AppError } from "../utils/AppError.js";

const createBenefitsService = async (soldierId, benefitsData) => {
  const soldierexist = await getBenefitsById(soldierId);
  if (soldierexist) {
    throw new AppError("Soldier has already a benefits", 409);
  }
  const { unit, benefitType } = benefitsData;
  if (Object.values(benefitType) === "giftCard") {
    const resultSchema = giftCArdSchema.safeParse(benefitsData.details);
    if (!resultSchema.success) {
      throw new AppError("details not compatible", 400);
    }
  }
  if (Object.values(benefitType) === "diningHall") {
    const resultSchema = diningHallSchema.safeParse(benefitsData.details);
    if (!resultSchema.success) {
      throw new AppError("details not compatible", 400);
    }
  }
  const firstData = { unit, benefitType };
  const secondData = { ...benefitsData };

  const benefitId = await createBenefits(soldierId, firstData, secondData);
  return benefitId;
};

const getBenefitsByIdService = async (soldierId) => {
  const fond = await getBenefitsById(soldierId);
  if (!found) {
    throw new AppError("benefit not Found", 404);
  }
  return fond;
};

export default { createBenefitsService, getBenefitsByIdService };
