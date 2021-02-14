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
const users_dao_1 = __importDefault(require("../daos/users.dao"));
class UsersService {
    static getInstance() {
        if (!UsersService.instance) {
            UsersService.instance = new UsersService();
        }
        return UsersService.instance;
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield users_dao_1.default.addUser(resource);
        });
    }
    // async deleteById(resourceId: string) {
    //     return await usersDao.removeUserById(resourceId);
    // };
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield users_dao_1.default.getUsers();
        });
    }
    ;
    // async patchById(resource: UserDto) {
    //     return await usersDao.patchUserById(resource)
    // };
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield users_dao_1.default.getUserById(resourceId);
        });
    }
    ;
}
exports.default = UsersService.getInstance();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBeUM7QUFJekMsTUFBTSxZQUFZO0lBR2QsTUFBTSxDQUFDLFdBQVc7UUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUN4QixZQUFZLENBQUMsUUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7U0FDOUM7UUFDRCxPQUFPLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUVLLE1BQU0sQ0FBQyxRQUFrQjs7WUFDM0IsT0FBTyxNQUFNLG1CQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLENBQUM7S0FBQTtJQUVELHlDQUF5QztJQUN6Qyx3REFBd0Q7SUFDeEQsS0FBSztJQUVDLElBQUksQ0FBQyxLQUFhLEVBQUUsSUFBWTs7WUFDbEMsT0FBTyxNQUFNLG1CQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsQ0FBQztLQUFBO0lBQUEsQ0FBQztJQUVGLHVDQUF1QztJQUN2QyxvREFBb0Q7SUFDcEQsS0FBSztJQUVDLFFBQVEsQ0FBQyxVQUFrQjs7WUFDN0IsT0FBTyxNQUFNLG1CQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELENBQUM7S0FBQTtJQUFBLENBQUM7Q0FVTDtBQUVELGtCQUFlLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyJ9