import React from "react";
import { AppLayout } from "@/layouts";
import classes from "./account.page.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { AccountFormComponent } from "./components/account-form.component";
import { AccountVm } from "./account.vm";
import { saveAccount } from "./api";

export const AccountPage: React.FC = () => {
  const { id: accountId } = useParams();
  const navigate = useNavigate();

  const [accounts, setAccounts] = React.useState<AccountVm[]>([
    { type: "Cuenta Corriente", name: "Mi cuenta" },
    { type: "Cuenta de Ahorro", name: "Ahorros" },
    { type: "Cuenta de Nomina", name: "Nomina" },
  ]);

  const handleSaveAccount = async (newAccount: AccountVm) => {
    await saveAccount(newAccount); 
    const updatedAccounts = [...accounts, newAccount]; 
    setAccounts(updatedAccounts);
    navigate("/account-list"); 
  };
  

  if (!accountId) {
    return (
      <AppLayout>
        <div className={classes.root}>
          <div className={classes.headerContainer}>
            <h1>Cuenta Bancaria no encontrada</h1>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Cuenta Bancaria</h1>
        </div>
        <AccountFormComponent typeList={accounts} onSave={handleSaveAccount} />
      </div>
    </AppLayout>
  );
};
