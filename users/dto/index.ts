
// import * as { Sequelize } from "sequelize";
import { Sequelize } from "sequelize";
import {UserFactory,UserStatic} from "./users.model";

export interface DB {
    sequelize: Sequelize;
    User: UserStatic;
}

export const sequelize = new Sequelize(
    (process.env.DB_NAME = "usersdb"),
    (process.env.DB_USER = "root"),
    (process.env.DB_PASSWORD = "root1234"),
    {
        port: 3306,
        host: "localhost",
        dialect: "mysql",
        pool: {
            min: 0,
            max: 5,
            acquire: 3000,
            idle: 1000000,
        },
    }
);

export const User = UserFactory(sequelize);

export const db: DB = {
    sequelize,
    User
};
