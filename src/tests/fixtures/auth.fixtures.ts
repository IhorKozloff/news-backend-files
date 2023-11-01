import { v4 as uuidv4 } from 'uuid';
import db from '../../db/sequelize';
import Token from '../../helpers/generateToken';

export const defaultUser = {
    name: 'John Doe',
    email: 'johndoe123@gmail.com',
    password: '123456',
}

const existingUserId = uuidv4();
const unexistingUserId = uuidv4();

export const existingUser = {
    ...defaultUser,
    id: existingUserId,
    token: '',
}

export const existingUserAuthData = {
    email: existingUser.email,
    password: existingUser.password,
};

export const existingUserToken = Token.generateById(existingUserId);

export const fakeData = {
    invalid: {
        email: 'qwertyuio.com',
        password: '123',
    },
    unexisting: {
        email: 'unexisting@gmail.com',
        password: '0987654321',
        id: unexistingUserId
    },
};

export const setExistingUser = async () => {
    return db.UserModel.create({
        ...existingUser
    });
};

export const setExistingAuthorizedUser = async () => {
    return db.UserModel.create({
        ...existingUser,
        token: existingUserToken
    });
};