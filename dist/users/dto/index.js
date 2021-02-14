"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.User = exports.sequelize = void 0;
// import * as { Sequelize } from "sequelize";
const sequelize_1 = require("sequelize");
const users_model_1 = require("./users.model");
exports.sequelize = new sequelize_1.Sequelize((process.env.DB_NAME = "usersdb"), (process.env.DB_USER = "root"), (process.env.DB_PASSWORD = "root1234"), {
    port: 3306,
    host: "localhost",
    dialect: "mysql",
    pool: {
        min: 0,
        max: 5,
        acquire: 3000,
        idle: 1000000,
    },
});
exports.User = users_model_1.UserFactory(exports.sequelize);
exports.db = {
    sequelize: exports.sequelize,
    User: exports.User
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91c2Vycy9kdG8vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsOENBQThDO0FBQzlDLHlDQUFzQztBQUN0QywrQ0FBcUQ7QUFPeEMsUUFBQSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUNsQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxFQUNqQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxFQUM5QixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxFQUN0QztJQUNJLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLFdBQVc7SUFDakIsT0FBTyxFQUFFLE9BQU87SUFDaEIsSUFBSSxFQUFFO1FBQ0YsR0FBRyxFQUFFLENBQUM7UUFDTixHQUFHLEVBQUUsQ0FBQztRQUNOLE9BQU8sRUFBRSxJQUFJO1FBQ2IsSUFBSSxFQUFFLE9BQU87S0FDaEI7Q0FDSixDQUNKLENBQUM7QUFFVyxRQUFBLElBQUksR0FBRyx5QkFBVyxDQUFDLGlCQUFTLENBQUMsQ0FBQztBQUU5QixRQUFBLEVBQUUsR0FBTztJQUNsQixTQUFTLEVBQVQsaUJBQVM7SUFDVCxJQUFJLEVBQUosWUFBSTtDQUNQLENBQUMifQ==