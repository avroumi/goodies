import { db } from "../config/mongodb.js";
import { ObjectId } from "mongodb";

const benefits = db.collection("benefits");

export const createBenefits = async (soldierId, firstData, secondData) => {
  const result = await benefits.insertOne({
    _id: new ObjectId(),
    soldierId,
    ...firstData,
    history: [
      { startDate: new Date().toISOString(), endDate: null, ...secondData },
    ],
  });

  return await benefits.findOne({ _id: result.insertedId });
};

export const getBenefitsById = async (soldierId) => {
  const benefit = await benefits.findOne({ soldierId: soldierId });
  return benefit;
};

export const updateBenefit = async (soldierId, updatedData) => {
  const updated = await benefits.updateOne(
    { soldierId },
    { $set: { updatedData } },
  );
  return updated.modifiedCount;
};

// console.log(
//   await createBenefits(
//     1,
//     { unit: "hello", benefitType: "giftCard" },
//     {
//       decisionReason: "oui",
//       budgetApproved: true,
//       details: {
//         cardProvider: "hello",
//         monthlyValue: 7,
//         validMerchants: ["falafel"],
//       },
//     },
//   ),
// );

// console.log(await getBenefitsById(3));
