import { Model, InferAttributes, InferCreationAttributes } from 'sequelize';

export interface IUser {
    name: string;
    email: string;
    password: string;
}

export interface IUserModel extends IUser {
    id?: string;
    token?: string;
}

export interface IUserAsRequest extends Omit<IUser, 'password'> {
    id: string
}

export interface IUserLogoutRequest {
    id: string
}
export type UserDetails = Required<IUserModel>

export interface UserModelType extends Model<InferAttributes<UserModelType>, InferCreationAttributes<UserModelType>>, IUserModel {

};