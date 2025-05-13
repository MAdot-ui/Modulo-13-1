export const routesPrefixes = {
  accountList: "/account-list",
  transfer: "/transfer",
  movements: "/movements/:id",
};

export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.accountList,
  editAccount: "/edit-account/:id",
  movements: routesPrefixes.movements,
  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}/:id`,
};
