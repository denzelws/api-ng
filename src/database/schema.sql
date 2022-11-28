
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users.usuarios (
	id uuid NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
	"name" varchar NOT NULL,
	"password" varchar NOT NULL,
	at_created date NOT NULL,
	account_id uuid NOT NULL,
	CONSTRAINT usuarios_pk PRIMARY KEY (id),
	CONSTRAINT usuarios_un UNIQUE (account_id),
	CONSTRAINT usuarios_fk FOREIGN KEY (account_id) REFERENCES users.accounts(id_balance)
);

CREATE TABLE IF NOT EXISTS users.accounts (
	id_balance uuid NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
	balance money NOT NULL,
	CONSTRAINT accounts_pk PRIMARY KEY (id_balance)
);

CREATE TABLE IF NOT EXISTS users.transactions (
	id uuid NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
	debited_account_id uuid NOT NULL,
	credited_account_id uuid NOT NULL,
	value uuid NOT NULL,
	created_at date NOT NULL,
	CONSTRAINT transactions_pk PRIMARY KEY (id),
	CONSTRAINT transactions_credited_fk FOREIGN KEY (credited_account_id) REFERENCES users.accounts(id_balance),
	CONSTRAINT transactions_debited_fk FOREIGN KEY (debited_account_id) REFERENCES users.accounts(id_balance),
);