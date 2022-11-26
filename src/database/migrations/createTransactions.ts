const createTransactions = `
CREATE TABLE users.transactions (
	id uuid NOT NULL,
	debited_account_id uuid NOT NULL,
	credited_account_id uuid NOT NULL,
	value uuid NOT NULL,
	created_at date NOT NULL,
	CONSTRAINT transactions_pk PRIMARY KEY (id),
	CONSTRAINT transactions_credited_fk FOREIGN KEY (credited_account_id) REFERENCES users.accounts(id_balance),
	CONSTRAINT transactions_debited_fk FOREIGN KEY (debited_account_id) REFERENCES users.accounts(id_balance),
);
`

module.exports = createTransactions