import { assert } from "node:test";
import service from "../../services/benefitsService.js";
import { mock, describe, it, beforeEach } from "node:test";

const mockData = {
  unit: "8900",
  benefitType: "giftCard",
  details: { cardProvider: "jfh", monthlyValue: 7, validMerchants: ["hvs"] },
  decisionReason: "fghf",
  budgetApprived: false,
};

describe("test getBeneficeById", () => {
  it("test the get benfit by id ", () => {
    mock.fn((getBenefitsById) =>
      async({
        benefitType: "giftCard",
        details: {
          cardProvider: "jfh",
          monthlyValue: 7,
          validMerchants: ["hvs"],
        },
        decisionReason: "fghf",
        budgetApprived: false,
      }),
    );

    const benefit = service.getBenefitsByIdService(1);
    assert.strictEqual(() => benefit);
  });
});

// console.log(
//   await updateBenefitService(1, {
//     benefitType: "giftCard",
//     details: { cardProvider: "jfh", monthlyValue: 7, validMerchants: ["hvs"] },
//     decisionReason: "fghf",
//     budgetApprived: false,
//     decisionDate: new Date().toString(),
//   }),
// );

// {

//   "benefitType": "giftCard",
//   "details": { "cardProvider": "ouioui", "monthlyValue": 23, "validMerchants": ["hvs"] },
//   "decisionReason": "hello",
//   "budgetApproved": false
// }

// '{
//   "benefitType": "giftCard",
//   "details": { "cardProvider": "jfh", "monthlyValue": 7, "validMerchants": ["hvs"] },
//   "decisionReason": "fghf",
//   "budgetApproved": false
// }'
