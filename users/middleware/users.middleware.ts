import express from 'express';
import userService from '../services/users.service';

class UsersMiddleware {
    private static instance: UsersMiddleware;

    static getInstance() {
        if (!UsersMiddleware.instance) {
            UsersMiddleware.instance = new UsersMiddleware();
        }
        return UsersMiddleware.instance;
    }

    /*
      All Validations go here
    */
}

export default UsersMiddleware.getInstance();