import React from "react";
import { useNavigate } from "react-router-dom"; 
import {
  AccountVm,
  AccountError,
  createEmptyAccountError,
  createEmptyAccountVm,
} from "../account.vm";
import classes from "./form.component.module.css";
import { validateForm } from "../validations/account-form.validation";

interface Props {
  typeList: AccountVm[];
  onSave: (account: AccountVm) => void;
}

export const AccountFormComponent: React.FC<Props> = ({ typeList, onSave }) => {
  const [account, setAccount] = React.useState<AccountVm>(createEmptyAccountVm());
  const [errors, setErrors] = React.useState<AccountError>(createEmptyAccountError());
  const navigate = useNavigate(); 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = validateForm(account);
    setErrors(validationResult.errors);

    if (validationResult.succeeded) {
      onSave(account); 
      navigate("/account-list", { state: { newAccount: account } }); 
    }
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Tipo de cuenta:</label>
            <select name="type" onChange={handleFieldChange} value={account.type} className={classes.large}>
              <option value="">Seleccione una cuenta</option>
              {typeList.map((acc) => (
                <option key={acc.type} value={acc.type}>
                  {acc.type}
                </option>
              ))}
            </select>
            <p className={classes.error}>{errors.type}</p>
          </div>

          <div>
            <label>Alias:</label>
            <input name="name" onChange={handleFieldChange} value={account.name} className={classes.large} />
            <p className={classes.error}>{errors.name}</p>
          </div>

          <button className={classes.button} type="submit">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

