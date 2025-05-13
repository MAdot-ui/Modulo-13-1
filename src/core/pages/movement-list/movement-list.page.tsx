import React from "react";
import { AppLayout } from "@/layouts";
import { MovementVM } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components";
import { getMovementList, getAccountDetails } from "./api"; // Import account API
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { useParams } from "react-router-dom";

export const MovementListPage: React.FC = () => {
  const { id: accountId } = useParams();

  const [movementList, setMovementList] = React.useState<MovementVM[]>([]);
  const [iban, setIban] = React.useState<string>(""); // Add state for IBAN

  React.useEffect(() => {
    if (accountId) {
      getMovementList(accountId).then((result) =>
        setMovementList(mapMovementListFromApiToVm(result))
      );

      getAccountDetails(accountId).then((account) => {
        console.log("Account details:", account); // Check if IBAN is coming back
        setIban(account.iban);
      });
    }
  }, [accountId]);

  const balance = movementList.length > 0 ? movementList[0].balance : "0";

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div className={classes.saldoContainer}>
            <p>SALDO DISPONIBLE</p> <h4>{balance}</h4>
          </div>
        </div>
        <div className={classes.ibanContainer}>
          <p> Alias: Gastos mes </p>
          <p>IBAN: {iban}</p>
        </div>
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
