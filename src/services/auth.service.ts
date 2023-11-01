import { AppError } from '../types/AppError';
import Token from '../helpers/generateToken';
import { errorMessages } from '../error-messages';
import db from '../db/sequelize';
import { IUser, UserDetails } from '../types/user.types';

export class AuthService {

    static async login(userLoginData: Omit<IUser, 'name'>): Promise<Omit<UserDetails, 'password'>> {
        const { email, password } = userLoginData;

        const user = await db.UserModel.findOne({
            where: {
                email
            }
        });

        if (!user) {
            throw new AppError(401, errorMessages.AUTH.EMAIL_NOT_FOUND);
        }

        const isPasswordValid = user.password === password;

        if (!isPasswordValid) {
            throw new AppError(401, errorMessages.AUTH.WRONG_PASSWORD);
        }

        const token = Token.generateById(user.id!);

        const isUserUpdate = await db.UserModel.update({
            token
        }, {
            where: {
                id: user.id,
            },
            returning: true,
        });

        if (!isUserUpdate) {
            throw new AppError(500, errorMessages.GENERAL.DATABASE_PROCESS_WAS_FAILED);
        }

        const updatedUserSanitize = isUserUpdate[1][0].dataValues;

        return {
            email: updatedUserSanitize.email,
            name: updatedUserSanitize.name,
            id: updatedUserSanitize.id!,
            token: updatedUserSanitize.token!
        };
    }

    static async register(userRegisterData: IUser): Promise<Omit<UserDetails, 'password'>> {
        const { name, email, password } = userRegisterData;

        const user = await db.UserModel.findOne({
            where: {
                email
            }
        });

        if (user !== null) {
            throw new AppError(409, errorMessages.AUTH.EMAIL_IN_USE);
        }

        const creatingUserData: IUser = {
            name,
            email,
            password
        }; 

        if(name) {
            creatingUserData.name = name; 
        }

        const createdUser = await db.UserModel.create(creatingUserData);

        const sanitazedCreatedResult = createdUser.toJSON();

        return {
            email: sanitazedCreatedResult.email,
            name: sanitazedCreatedResult.name,
            id: sanitazedCreatedResult.id!,
            token: sanitazedCreatedResult.token!
        };
    }

    static async logout(userId: string): Promise<Omit<UserDetails, 'password'>> {
     
        const user = await db.UserModel.findOne({
            where: {
                id: userId
            }
        });

        if (!user) {
            throw new AppError(401, errorMessages.AUTH.EMAIL_NOT_FOUND);
        }

        const isUserUpdate = await db.UserModel.update({
            token: ''
        }, {
            where: {
                id: user.id,
            },
            returning: true,
        });

        const updatedUserSanitize = isUserUpdate[1][0].dataValues;

        return {
            email: updatedUserSanitize.email,
            name: updatedUserSanitize.name,
            id: updatedUserSanitize.id!,
            token: updatedUserSanitize.token!
        };
    }
}