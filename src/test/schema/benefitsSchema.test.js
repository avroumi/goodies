import { giftCArdSchema } from "../../schema/benefitsSchema.js";
import { describe, it } from "node:test";
import assert from "node:assert/strict";

const fakeDataValid = {
  cardProvider: "hello",
  monthlyValue: 9,
  validMerchants: ["yess"],
};
const fakeDataInvalid = {
  cardProvider: "hello",
  monthlyValue: "nffb",
  validMerchants: ["hbv"],
};

describe("test the schema giftCard", () => {
  it("with valid data", () => {
    assert.strictEqual(giftCArdSchema.safeParse(fakeDataValid).success, true);
  });
  it("with invalid data", () => {
    assert.rejects(() => giftCArdSchema.safeParse(fakeDataInvalid).success);
  });
});
