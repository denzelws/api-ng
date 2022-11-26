const createAccounts = `
CREATE TABLE users.accounts (
	id_balance uuid NOT NULL,
	balance money NOT NULL,
	CONSTRAINT accounts_pk PRIMARY KEY (id_balance)
);
`

module.exports = createAccounts