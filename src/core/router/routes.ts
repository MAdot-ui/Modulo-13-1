export const routesPrefixes = {
  accountList: "/account-list",
  transfer: "/transfer",
  movements: "/movements/:id",
  editAccount: "/edit-account/:id",
};

export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.accountList,
  editAccount: routesPrefixes.editAccount,
  movements: routesPrefixes.movements,
  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}/:id`,
};
