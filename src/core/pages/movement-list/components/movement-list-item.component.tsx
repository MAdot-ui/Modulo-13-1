import React from "react";
import { MovementVM } from "../movement-list.vm";
import classes from "./movement-list-item.component.module.css";


interface Props {
  movementItem: MovementVM;
}
export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movementItem } = props;

  return (
    <div className={classes.row}>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {movementItem.transaction.toLocaleDateString()}
      </span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {movementItem.realTransaction.toLocaleDateString()}
      </span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {movementItem.description}
      </span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {movementItem.amount}
      </span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {movementItem.balance}
      </span>
    </div>
  );
};