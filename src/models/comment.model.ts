import { Sequelize, DataTypes } from 'sequelize';
import { CommentModelType } from '../types/comments.types';

export const CommentsModel = (sequelize: Sequelize) => {
    return sequelize.define<CommentModelType>('comments', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        user_name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        parent_id: {
            type: DataTypes.UUID,
            allowNull: true,
        },
        replyes_ids: {
            type: DataTypes.ARRAY(DataTypes.UUID),
            defaultValue: [],
        },
        news_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        published: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: Sequelize.fn('NOW'),
        },
        img_urls: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: [],
        }
    },
    {
        timestamps: false,
    }
    )
};
