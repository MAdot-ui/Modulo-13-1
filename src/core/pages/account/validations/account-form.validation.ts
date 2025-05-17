import { FormValidationResult } from "@/common/validations/validations.model";
import { AccountError, AccountVm } from "../account.vm";
import {
  validateNameField,
  validateAccountIdField,
} from "./account-field.validation";

export const validateForm = (account: AccountVm): FormValidationResult<AccountError> => {
  const fieldValidationResults = [
    validateAccountIdField(account.type),
    validateNameField(account.name),
  ];
  const formValidationResult: FormValidationResult<AccountError> = {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      type: fieldValidationResults[0].errorMessage ?? "",
      name: fieldValidationResults[1].errorMessage ?? "",
     
    },
  };
  return formValidationResult;
};
