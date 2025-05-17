import { REQUIRED_FIELD_MESSAGE } from "@/common/validations/validation.const";
import {
  validateAccountIdField,
  validateNameField,
 
} from "./account-field.validation";

describe("transfer-field.validation specs", () => {


  describe("validateNameField", () => {
    it("should return false when name is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateNameField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("should return true when name is informed", () => {
      // Arrange
      const value = "John Doe";

      // Act
      const result = validateNameField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateAccountIdField", () => {
    it("should return false when account id is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateAccountIdField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("should return true when account id is informed", () => {
      // Arrange
      const value = "1";

      // Act
      const result = validateAccountIdField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
  });
