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
Object.defineProperty(exports, "__esModule", { value: true });
class UsersMiddleware {
    static getInstance() {
        if (!UsersMiddleware.instance) {
            UsersMiddleware.instance = new UsersMiddleware();
        }
        return UsersMiddleware.instance;
    }
    // async validateRequiredUserBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
    //     if (req.body && req.body.email && req.body.password) {
    //         next();
    //     } else {
    //         res.status(400).send({error: `Missing required fields: email and/or password`});
    //     }
    // }
    // async validateSameEmailDoesntExist(req: express.Request, res: express.Response, next: express.NextFunction) {
    //     const user = await userService.getUserByEmail(req.body.email);
    //     if (user) {
    //         res.status(400).send({error: `User email already exists`});
    //     } else {
    //         next();
    //     }
    // }
    // async validateSameEmailBelongToSameUser(req: express.Request, res: express.Response, next: express.NextFunction) {
    //     const user = await userService.getUserByEmail(req.body.email);
    //     if (user && user.id === req.params.userId) {
    //         next();
    //     } else {
    //         res.status(400).send({error: `Invalid email`});
    //     }
    // }
    // async validatePatchEmail(req: express.Request, res: express.Response, next: express.NextFunction) {
    //     if (req.body.email) {
    //         UsersMiddleware.getInstance().validateSameEmailBelongToSameUser(req, res, next);
    //     } else {
    //         next();
    //     }
    // }
    // async validateUserExists(req: express.Request, res: express.Response, next: express.NextFunction) {
    //     const user = await userService.readById(req.params.userId);
    //     if (user) {
    //         next();
    //     } else {
    //         res.status(404).send({error: `User ${req.params.userId} not found`});
    //     }
    // }
    extractUserId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.id = req.params.userId;
            next();
        });
    }
}
exports.default = UsersMiddleware.getInstance();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL21pZGRsZXdhcmUvdXNlcnMubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLE1BQU0sZUFBZTtJQUdqQixNQUFNLENBQUMsV0FBVztRQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFO1lBQzNCLGVBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztTQUNwRDtRQUNELE9BQU8sZUFBZSxDQUFDLFFBQVEsQ0FBQztJQUNwQyxDQUFDO0lBRUQsa0hBQWtIO0lBQ2xILDZEQUE2RDtJQUM3RCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDJGQUEyRjtJQUMzRixRQUFRO0lBQ1IsSUFBSTtJQUVKLGdIQUFnSDtJQUNoSCxxRUFBcUU7SUFDckUsa0JBQWtCO0lBQ2xCLHNFQUFzRTtJQUN0RSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixJQUFJO0lBRUoscUhBQXFIO0lBQ3JILHFFQUFxRTtJQUNyRSxtREFBbUQ7SUFDbkQsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiwwREFBMEQ7SUFDMUQsUUFBUTtJQUNSLElBQUk7SUFFSixzR0FBc0c7SUFDdEcsNEJBQTRCO0lBQzVCLDJGQUEyRjtJQUMzRixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixJQUFJO0lBRUosc0dBQXNHO0lBQ3RHLGtFQUFrRTtJQUNsRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnRkFBZ0Y7SUFDaEYsUUFBUTtJQUNSLElBQUk7SUFFRSxhQUFhLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztZQUN2RixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDIn0=