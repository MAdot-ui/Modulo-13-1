import React from "react";
import { AppLayout } from "@/layouts";
import { AccountVm } from "./account-list.vm";
import classes from "./account-list.page.module.css";
import { AccountListTableComponent } from "./components";
import { getAccountList } from "./api";
import { mapAccountListFromApiToVm } from "./account-list.mapper";
import { Link } from "react-router-dom"; 

export const AccountListPage: React.FC = () => {
  
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

React.useEffect(() => {
  getAccountList().then((result) => {
    setAccountList(mapAccountListFromApiToVm(result));
  });
}, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Mis cuentas</h1>
          <button >
            <Link to="/edit-account/:id" className={classes.linkButton}>AGREGAR NUEVA CUENTA</Link> 
          </button>
        </div>
        <AccountListTableComponent accountList={accountList} /> 
      </div>
    </AppLayout>
  );
};
