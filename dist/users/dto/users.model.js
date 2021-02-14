"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = exports.User = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
function UserFactory(sequelize) {
    return sequelize.define("UserDto", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        firstName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        lastName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        permissionLevel: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true
        }
    });
}
exports.UserFactory = UserFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91c2Vycy9kdG8vdXNlcnMubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXNFO0FBWXRFLE1BQWEsSUFBSyxTQUFRLGlCQUErQjtDQUFHO0FBQTVELG9CQUE0RDtBQU01RCxTQUFnQixXQUFXLENBQUUsU0FBb0I7SUFDN0MsT0FBbUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7UUFDM0MsRUFBRSxFQUFFO1lBQ0EsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztZQUN2QixhQUFhLEVBQUUsSUFBSTtZQUNuQixVQUFVLEVBQUUsSUFBSTtTQUNuQjtRQUNELEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLElBQUk7WUFDZixNQUFNLEVBQUUsSUFBSTtTQUNmO1FBQ0QsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtZQUN0QixTQUFTLEVBQUUsSUFBSTtTQUNsQjtRQUNELFNBQVMsRUFBRTtZQUNQLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLElBQUk7U0FDbEI7UUFDRCxRQUFRLEVBQUU7WUFDTixJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1lBQ3RCLFNBQVMsRUFBRSxJQUFJO1NBQ2xCO1FBQ0QsZUFBZSxFQUFFO1lBQ2IsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztZQUN2QixTQUFTLEVBQUUsSUFBSTtTQUNsQjtLQUNKLENBQUMsQ0FBQztBQUNQLENBQUM7QUE3QkQsa0NBNkJDIn0=