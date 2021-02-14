"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const dto_1 = require("../dto");
// import { Connect, Query } from '../../common/config/mysql_config';
const log = debug_1.default('app:in-memory-dao');
class UsersDao {
    constructor() {
        this.users = [];
        log('Created new instance of UsersDao');
    }
    static getInstance() {
        if (!UsersDao.instance) {
            UsersDao.instance = new UsersDao();
        }
        return UsersDao.instance;
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            // user.id = shortid.generate(); //toask:how shortid works for incremental id
            this.users.push(user);
            return user.id;
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return dto_1.db.User.findAll({ attributes: [
                    "id",
                    "email",
                    "password",
                    "firstname",
                    "lastname",
                    "permissionLevel"
                ] }).then(result => result);
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return dto_1.db.User.findByPk(userId).then(result => result);
            // return db.User.findOne((user: { id: number; }) => user.id === userId);
        });
    }
    putUserById(user) {
        return __awaiter(this, void 0, void 0, function* () {
            //     const objIndex = this.users.findIndex((obj: { id: string; }) => obj.id === user.id);
            //     this.users.splice(objIndex, 1, user);
            //     return `${user.id} updated via put`;
        });
    }
    patchUserById(user) {
        return __awaiter(this, void 0, void 0, function* () {
            //     const objIndex = this.users.findIndex((obj: { id: string; }) => obj.id === user.id);
            //     let currentUser = this.users[objIndex];
            //     const allowedPatchFields = ["password", "firstName", "lastName", "permissionLevel"];
            //     for (let field of allowedPatchFields) {
            //         if (field in user) {
            //             // @ts-ignore
            //             currentUser[field] = user[field];
            //         }
            //     }
            //     this.users.splice(objIndex, 1, currentUser);
            //     return `${user.id} patched`;
        });
    }
    removeUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            // const objIndex = this.users.findIndex((obj: { id: string; }) => obj.id === userId);
            // this.users.splice(objIndex, 1);
            // return `${userId} removed`;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            // const objIndex = this.users.findIndex((obj: { email: string; }) => obj.email === email);
            // let currentUser = this.users[objIndex];
            // if (currentUser) {
            //     return currentUser;
            // } else {
            //     return null;
            // }
        });
    }
}
exports.default = UsersDao.getInstance();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlcnMvZGFvcy91c2Vycy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSxrREFBMEI7QUFDMUIsZ0NBQTRCO0FBRTVCLHFFQUFxRTtBQUNyRSxNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFHeEQsTUFBTSxRQUFRO0lBSVY7UUFGQSxVQUFLLEdBQW9CLEVBQUUsQ0FBQztRQUd4QixHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQVc7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUNwQixRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7U0FDdEM7UUFDRCxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVLLE9BQU8sQ0FBQyxJQUFjOztZQUN4Qiw2RUFBNkU7WUFDN0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ25CLENBQUM7S0FBQTtJQUVLLFFBQVE7O1lBQ1YsT0FBTyxRQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLFVBQVUsRUFBRTtvQkFDaEMsSUFBSTtvQkFDSixPQUFPO29CQUNQLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxVQUFVO29CQUNWLGlCQUFpQjtpQkFDcEIsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0IsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLE1BQWM7O1lBQzVCLE9BQU8sUUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkQseUVBQXlFO1FBQzdFLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxJQUFjOztZQUNoQywyRkFBMkY7WUFDM0YsNENBQTRDO1lBQzVDLDJDQUEyQztRQUMzQyxDQUFDO0tBQUE7SUFFSyxhQUFhLENBQUMsSUFBYzs7WUFDbEMsMkZBQTJGO1lBQzNGLDhDQUE4QztZQUM5QywyRkFBMkY7WUFDM0YsOENBQThDO1lBQzlDLCtCQUErQjtZQUMvQiw0QkFBNEI7WUFDNUIsZ0RBQWdEO1lBQ2hELFlBQVk7WUFDWixRQUFRO1lBQ1IsbURBQW1EO1lBQ25ELG1DQUFtQztRQUNuQyxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsTUFBYzs7WUFDL0Isc0ZBQXNGO1lBQ3RGLGtDQUFrQztZQUNsQyw4QkFBOEI7UUFDbEMsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLEtBQWE7O1lBQzlCLDJGQUEyRjtZQUMzRiwwQ0FBMEM7WUFDMUMscUJBQXFCO1lBQ3JCLDBCQUEwQjtZQUMxQixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLElBQUk7UUFDUixDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyJ9