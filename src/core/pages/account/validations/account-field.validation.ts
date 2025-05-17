import {
  buildRequiredFieldValidationFailedResponse,
  buildValidationSucceededResult,
  isStringValueInformed,
} from "@/common/validations";
import { FieldValidationResult } from "@/common/validations/validations.model";

export const validateAccountIdField = (
  value: string
): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceededResult();
};

export const validateNameField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceededResult();
};
