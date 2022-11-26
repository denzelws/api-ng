const createUsers = `
CREATE TABLE users.usuarios (
	id uuid NOT NULL,
	"name" varchar NOT NULL,
	"password" varchar NOT NULL,
	at_created date NOT NULL,
	account_id uuid NOT NULL,
	CONSTRAINT usuarios_pk PRIMARY KEY (id),
	CONSTRAINT usuarios_un UNIQUE (account_id),
	CONSTRAINT usuarios_fk FOREIGN KEY (account_id) REFERENCES users.accounts(id_balance)
);
`

module.exports = createUsers