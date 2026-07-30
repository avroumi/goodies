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

// {"_id":"6a69b9176414fb9db3771189","soldierId":1,"unit":"hello","benefitType":"giftCard","history":[{"startDate":"2026-07-29T08:25:59.010Z","endDate":null,"decisionReason":"oui","budgetApproved":true,"details":{"cardProvider":"hello","monthlyValue":7,"validMerchants":["falafel"]}}],"updatedData":{"_id":"6a69b9176414fb9db3771189","soldierId":1,"unit":"hello","benefitType":"giftCard","history":[{"startDate":"2026-07-29T08:25:59.010Z","endDate":"Thu Jul 30 2026 10:50:06 GMT+0300 (Israel Daylight Time)","decisionReason":"oui","budgetApproved":true,"details":{"cardProvider":"hello","monthlyValue":7,"validMerchants":["falafel"]}},{"startDate":"Thu Jul 30 2026 10:50:06 GMT+0300 (Israel Daylight Time)","endDate":null,"decisionReason":"fghf","benefitType":"giftCard","details":{"cardProvider":"jfh","monthlyValue":7,"validMerchants":["hvs"]},"budgetApprived":false}],"updatedData":{"_id":"6a69b9176414fb9db3771189","soldierId":1,"unit":"hello","benefitType":"giftCard","history":[{"startDate":"2026-07-29T08:25:59.010Z","endDate":"Thu Jul 30 2026 10:49:48 GMT+0300 (Israel Daylight Time)","decisionReason":"oui","budgetApproved":true,"details":{"cardProvider":"hello","monthlyValue":7,"validMerchants":["falafel"]}},{"startDate":"Thu Jul 30 2026 10:49:48 GMT+0300 (Israel Daylight Time)","endDate":null,"decisionReason":"fghf","benefitType":"giftCard","details":{"cardProvider":"jfh","monthlyValue":7,"validMerchants":["hvs"]},"budgetApprived":false}],"updatedData":{"_id":"6a69b9176414fb9db3771189","soldierId":1,"unit":"hello","benefitType":"giftCard","history":[{"startDate":"2026-07-29T08:25:59.010Z","endDate":"Thu Jul 30 2026 10:49:45 GMT+0300 (Israel Daylight Time)","decisionReason":"oui","budgetApproved":true,"details":{"cardProvider":"hello","monthlyValue":7,"validMerchants":["falafel"]}},{"startDate":"Thu Jul 30 2026 10:49:45 GMT+0300 (Israel Daylight Time)","endDate":null,"decisionReason":"fghf","benefitType":"giftCard","details":{"cardProvider":"jfh","monthlyValue":7,"validMerchants":["hvs"]},"budgetApprived":false}],"updatedData":{"_id":"6a69b9176414fb9db3771189","soldierId":1,"unit":"hello","benefitType":"giftCard","history":[{"startDate":"2026-07-29T08:25:59.010Z","endDate":"Thu Jul 30 2026 10:49:40 GMT+0300 (Israel Daylight Time)","decisionReason":"oui","budgetApproved":true,"details":{"cardProvider":"hello","monthlyValue":7,"validMerchants":["falafel"]}},{"startDate":"Thu Jul 30 2026 10:49:40 GMT+0300 (Israel Daylight Time)","endDate":null,"decisionReason":"fghf","benefitType":"giftCard","details":{"cardProvider":"jfh","monthlyValue":7,"validMerchants":["hvs"]},"budgetApprived":false}],"updatedData":{"_id":"6a69b9176414fb9db3771189","soldierId":1,"unit":"hello","benefitType":"giftCard","history":[{"startDate":"2026-07-29T08:25:59.010Z","endDate":"Thu Jul 30 2026 10:49:36 GMT+0300 (Israel Daylight Time)","decisionReason":"oui","budgetApproved":true,"details":{"cardProvider":"hello","monthlyValue":7,"validMerchants":["falafel"]}},{"startDate":"Thu Jul 30 2026 10:49:36 GMT+0300 (Israel Daylight Time)","endDate":null,"decisionReason":"fghf","benefitType":"giftCard","details":{"cardProvider":"jfh","monthlyValue":7,"validMerchants":["hvs"]},"budgetApprived":false}],"updatedData":{"_id":"6a69b9176414fb9db3771189","soldierId":1,"unit":"hello","benefitType":"giftCard","history":[{"startDate":"2026-07-29T08:25:59.010Z","endDate":"Thu Jul 30 2026 10:49:02 GMT+0300 (Israel Daylight Time)","decisionReason":"oui","budgetApproved":true,"details":{"cardProvider":"hello","monthlyValue":7,"validMerchants":["falafel"]}},{"startDate":"Thu Jul 30 2026 10:49:02 GMT+0300 (Israel Daylight Time)","endDate":null,"decisionReason":"fghf","benefitType":"giftCard","details":{"cardProvider":"jfh","monthlyValue":7,"validMerchants":["hvs"]},"budgetApprived":false}],"updatedData":{"_id":"6a69b9176414fb9db3771189","soldierId":1,"unit":"hello","benefitType":"giftCard","history":[{"startDate":"2026-07-29T08:25:59.010Z","endDate":"Thu Jul 30 2026 10:48:55 GMT+0300 (Israel Daylight Time)","decisionReason":"oui","budgetApproved":true,"details":{"cardProvider":"hello","monthlyValue":7,"validMerchants":["falafel"]}},{"startDate":"Thu Jul 30 2026 10:48:55 GMT+0300 (Israel Daylight Time)","endDate":null,"decisionReason":"fghf","benefitType":"giftCard","details":{"cardProvider":"jfh","monthlyValue":7,"validMerchants":["hvs"]},"budgetApprived":false}],"updatedData":{"_id":"6a69b9176414fb9db3771189","soldierId":1,"unit":"hello","benefitType":"giftCard","history":[{"startDate":"2026-07-29T08:25:59.010Z","endDate":"Thu Jul 30 2026 10:48:18 GMT+0300 (Israel Daylight Time)","decisionReason":"oui","budgetApproved":true,"details":{"cardProvider":"hello","monthlyValue":7,"validMerchants":["falafel"]}},{"startDate":"Thu Jul 30 2026 10:48:18 GMT+0300 (Israel Daylight Time)","endDate":null,"decisionReason":"fghf","benefitType":"giftCard","details":{"cardProvider":"jfh","monthlyValue":7,"validMerchants":["hvs"]},"budgetApprived":false}],"updatedData":{"_id":"6a69b9176414fb9db3771189","soldierId":1,"unit":"hello","benefitType":"giftCard","history":[{"startDate":"2026-07-29T08:25:59.010Z","endDate":"Thu Jul 30 2026 10:48:15 GMT+0300 (Israel Daylight Time)","decisionReason":"oui","budgetApproved":true,"details":{"cardProvider":"hello","monthlyValue":7,"validMerchants":["falafel"]}},{"startDate":"Thu Jul 30 2026 10:48:15 GMT+0300 (Israel Daylight Time)","endDate":null,"decisionReason":"fghf","benefitType":"giftCard","details":{"cardProvider":"jfh","monthlyValue":7,"validMerchants":["hvs"]},"budgetApprived":false}],"updatedData":{"_id":"6a69b9176414fb9db3771189","soldierId":1,"unit":"hello","benefitType":"giftCard","history":[{"startDate":"2026-07-29T08:25:59.010Z","endDate":"Thu Jul 30 2026 10:47:49 GMT+0300 (Israel Daylight Time)","decisionReason":"oui","budgetApproved":true,"details":{"cardProvider":"hello","monthlyValue":7,"validMerchants":["falafel"]}},{"startDate":"Thu Jul 30 2026 10:47:49 GMT+0300 (Israel Daylight Time)","endDate":null,"decisionReason":null,"benefitType":"giftCard","details":{"cardProvider":"jfh","monthlyValue":7,"validMerchants":["hvs"]},"adecisionReason":"fghf","budgetApprived":false}],"updatedData":{"_id":"6a69b9176414fb9db3771189","soldierId":1,"unit":"hello","benefitType":"giftCard","history":[{"startDate":"2026-07-29T08:25:59.010Z","endDate":"Thu Jul 30 2026 10:47:49 GMT+0300 (Israel Daylight Time)","decisionReason":"oui","budgetApproved":true,"details":{"cardProvider":"hello","monthlyValue":7,"validMerchants":["falafel"]}},{"startDate":"Thu Jul 30 2026 10:47:49 GMT+0300 (Israel Daylight Time)","endDate":null,"decisionReason":null,"benefitType":"giftCard",etails":{"cardProvider":"jfh","monthlyValue":7,"validMerchants":["hvs"]},"adecisionReason":"fghf","budgetApprived":false}],"currentBenefitType":"giftCard"},"currentBenefitType":"giftCard"},"currentBenefitType":"giftCard"},"currentBenefitType":"giftCard"},"currentBenefitType":"giftCard"},"currentBenefitType":"giftCard"},"currentBenefitType":"giftCard"},"currentBenefitType":"giftCard"},"currentBenefitType":"giftCard"},"currentBenefitType":"giftCard"},"currentBenefitType":"giftCard"}}

// {"error":"undefined: Invalid input: expected object, received undefined"}

//  benefitType: "giftCard",
// details: { cardProvider: "jfh", monthlyValue: 7, validMerchants: ["hvs"] },
// decisionReason: "fghf",
// budgetApprived: false,
// unit:"3400"

// {"error":"Cannot set property query of #<IncomingMessage> which has only a getter"} endpoint 5

// "error":"invalid input syntax for type bigint: \"[object Object]\""} endpoint 6 et 7
