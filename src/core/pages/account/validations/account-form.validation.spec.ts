import { validateForm } from "./account-form.validation";
import * as accountFieldValidation from "./account-field.validation";
import { AccountVm } from "../account.vm";
import { vi } from "vitest";
describe("transfer-form.validation specs", () => {
  describe("validateForm", () => {
    it("should return true when all fields are correct", () => {
      // Arrange
      const account: AccountVm = {
        type: "1",
        name: "John Doe",
       
      };
      vi.spyOn(accountFieldValidation, "validateNameField").mockReturnValue({
        succeeded: true,
      });
     
     
      // Act
      const result = validateForm(account);
      // Assert
      expect(result.succeeded).toBeTruthy();
      expect(result.errors).toEqual({
        type: "",
        name: "",
      });
    });
    it("should return false when validateNameFieldAmount is incorrect", () => {
      // Arrange
      const account: AccountVm = {
        type: "1",
        name: "",
      };
     
      vi.spyOn(accountFieldValidation, "validateNameField").mockReturnValue({
        succeeded: false,
        errorMessage: "Error",
      });
   
      // Act
      const result = validateForm(account);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: "",
        name: "Error",
       
      });
     
    });
  });
});
