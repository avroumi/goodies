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

  return result.insertedId;
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
