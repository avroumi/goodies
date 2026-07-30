import { assert } from "node:console";
im;
import service from "../../service/benefitsService.js";
import { mock, describe, it, beforeEach } from "node:test";

const mockData = {
  benefitType: "giftCard",
  details: { cardProvider: "jfh", monthlyValue: 7, validMerchants: ["hvs"] },
  decisionReason: "fghf",
  budgetApprived: false,
};

describe("test getBeneficeById", () => {
  mock.method(service, "getBenefitsByIdService", () => ({
    benefitType: "giftCard",
    details: { cardProvider: "jfh", monthlyValue: 7, validMerchants: ["hvs"] },
    decisionReason: "fghf",
    budgetApprived: false,
  }));
  mock.fn(function getBenefitsById() {
    null;
  });
  const benefit = getBenefitsByIdService(1);
  assert.rejects(() => benefit);
});

console.log(
  await updateBenefitService(1, {
    benefitType: "giftCard",
    details: { cardProvider: "jfh", monthlyValue: 7, validMerchants: ["hvs"] },
    decisionReason: "fghf",
    budgetApprived: false,
    decisionDate: new Date().toString(),
  }),
);
