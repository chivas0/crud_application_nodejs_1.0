"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const users_controller_1 = __importDefault(require("./controllers/users.controller"));
const users_middleware_1 = __importDefault(require("./middleware/users.middleware"));
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app.route(`/users`)
            .get(users_controller_1.default.listUsers)
            .post(
        // UsersMiddleware.validateRequiredUserBodyFields,
        // UsersMiddleware.validateSameEmailDoesntExist,
        users_controller_1.default.createUser);
        this.app.param(`userId`, users_middleware_1.default.extractUserId);
        this.app.route(`/users/:userId`)
            // .all(UsersMiddleware.validateUserExists)
            .get(users_controller_1.default.getUserById);
        // .delete(UsersController.removeUser);
        // this.app.put(`/users/:userId`,[
        //     UsersMiddleware.validateRequiredUserBodyFields,
        //     UsersMiddleware.validateSameEmailBelongToSameUser,
        //     UsersController.put
        // ]);
        // this.app.patch(`/users/:userId`, [
        //     UsersMiddleware.validatePatchEmail,
        //     UsersController.patch
        // ]);
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXJzL3VzZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQWtFO0FBQ2xFLHNGQUE2RDtBQUM3RCxxRkFBNEQ7QUFHNUQsTUFBYSxXQUFZLFNBQVEseUNBQWtCO0lBQy9DLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsZUFBZTtRQUVYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNuQixHQUFHLENBQUMsMEJBQWUsQ0FBQyxTQUFTLENBQUM7YUFDOUIsSUFBSTtRQUNELGtEQUFrRDtRQUNsRCxnREFBZ0Q7UUFDaEQsMEJBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsMEJBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztZQUM1QiwyQ0FBMkM7YUFDMUMsR0FBRyxDQUFDLDBCQUFlLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDakMsdUNBQXVDO1FBRTNDLGtDQUFrQztRQUNsQyxzREFBc0Q7UUFDdEQseURBQXlEO1FBQ3pELDBCQUEwQjtRQUMxQixNQUFNO1FBRU4scUNBQXFDO1FBQ3JDLDBDQUEwQztRQUMxQyw0QkFBNEI7UUFDNUIsTUFBTTtRQUVOLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUFqQ0Qsa0NBaUNDIn0=