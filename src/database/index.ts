import { DataSource } from "typeorm";

 export const AppDataSource = new DataSource({
    "name": "default",
    "type": "postgres",
    "port": 5433,
    "host": "localhost",
    "username": "api-ng",
    "password": "123456",
    "database": "api-ng",
    "entities": ["./src/entities/*.ts"],
    "migrations": ["./src/database/migrations/*.ts"],
})


