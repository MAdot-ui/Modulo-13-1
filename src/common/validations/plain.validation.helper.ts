import { REQUIRED_FIELD_MESSAGE } from "./validation.const";
import { FieldValidationResult } from "./validations.model";

export const buildValidationFailedResult = (
  errorMessage: string
): FieldValidationResult => ({
  succeeded: false,
  errorMessage,
});

export const buildValidationSucceededResult = () => ({
  succeeded: true,
});

export const buildRequiredFieldValidationFailedResponse = () =>
    buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);