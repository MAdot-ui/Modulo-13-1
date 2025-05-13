import React from "react";
import { AppLayout } from "@/layouts";
import { MovementVM } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components";
import { getMovementList } from "./api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";

export const MovementListPage: React.FC<{ accountId: string }> = ({
  accountId,
}) => {
  const [movementList, setMovementList] = React.useState<MovementVM[]>([]);

  React.useEffect(() => {
    getMovementList(accountId).then((result) =>
      setMovementList(mapMovementListFromApiToVm(result))
    );
  }, [accountId]);

  const balance =
    movementList.length > 0
      ? movementList[movementList.length - 1].balance
      : "0";

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div className={classes.saldoContainer}>
            <p>SALDO DISPONIBLE</p>
            <h4> {balance}</h4>
          </div>
        </div>
        <div className={classes.IBAN}>
          <div> Alias: Gastos mes </div>
          <div>IBAN:</div>
        </div>
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
