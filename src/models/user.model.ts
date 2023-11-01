import { Sequelize, DataTypes } from 'sequelize';
import { UserModelType } from '../types/user.types';

export const UserModel = (sequelize: Sequelize) => {

    return sequelize.define<UserModelType>('users', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        token: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: ''
        }
    },
    {
        timestamps: true,
    }
    )
}


