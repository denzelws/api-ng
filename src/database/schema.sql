
CREATE DATABASE ngdb;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
	id uuid NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
	name varchar NOT NULL,
	"password" varchar NOT NULL,
	account_id uuid,
	CONSTRAINT users_pk PRIMARY KEY (id),
	CONSTRAINT users_un UNIQUE (account_id),
	FOREIGN KEY (account_id) REFERENCES accounts(id)
);

CREATE TABLE IF NOT EXISTS accounts (
	id uuid NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
	balance money NOT NULL,
	CONSTRAINT accounts_pk PRIMARY KEY (id)
);

CREATE TABLE transactions (
	id uuid NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
	debited_account_id uuid NOT NULL,
	credited_account_id uuid NOT NULL,
	value uuid NOT NULL,
	created_at date NOT NULL,
	CONSTRAINT transactions_pk PRIMARY KEY (id),
	CONSTRAINT transactions_credited_fk FOREIGN KEY (credited_account_id) REFERENCES users.accounts(id_balance),
	CONSTRAINT transactions_debited_fk FOREIGN KEY (debited_account_id) REFERENCES users.accounts(id_balance),
);