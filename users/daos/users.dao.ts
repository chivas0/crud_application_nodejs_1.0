import {UserDtos} from "../dto/users.model";
import shortid from 'shortid';
import debug from 'debug';
import { db } from '../dto';
import { DB } from '../dto';
const log: debug.IDebugger = debug('app:in-memory-dao');


class UsersDao {
    private static instance: UsersDao;
    users: Array<UserDtos> = [];

    constructor() {
        log('Created new instance of UsersDao');
    }

    static getInstance(): UsersDao {
        if (!UsersDao.instance) {
            UsersDao.instance = new UsersDao();
        }
        return UsersDao.instance;
    }

    async addUser(user: UserDtos) {
        this.users.push(user);
        return user.id;
    }

    async getUsers() {
        return db.User.findAll({attributes: [
            "id",
            "email",
            "password",
            "firstname",
            "lastname",
            "permissionLevel"
        ]}).then(result => result);

    }
    
    async getUserById(userId: number) {
        // return db.User.findByPk(userId).then(result => result);
    }

    async putUserById(user: UserDtos) {
    
    }
    
    async patchUserById(user: UserDtos) {
    
    }

    async removeUserById(userId: string) {
        
    }

    async getUserByEmail(email: string) {
        
    }
}

export default UsersDao.getInstance();
