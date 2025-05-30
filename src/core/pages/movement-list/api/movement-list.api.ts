import Axios from "axios";
import { Account, Movement } from "./movement-list.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;
const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`; 

export const getAccountDetails = (accountId: string): Promise<Account> =>
  Axios.get<Account>(`${urlAccount}/${accountId}`).then(({ data }) => data);

export const getMovementList = (accountId: string): Promise<Movement[]> =>
  Axios.get<Movement[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );
