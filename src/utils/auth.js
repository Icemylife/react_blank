/**
 * Check account
 * @param account
 */
export const isAnonymous = (account) =>
  !account || !account.accountNumber // TODO: maybe use another check
