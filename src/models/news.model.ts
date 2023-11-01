import { Sequelize, DataTypes } from 'sequelize';
import { NewsModelType } from '../types/news.ttypes';

export const NewsModel = (sequelize: Sequelize) => {
    return sequelize.define<NewsModelType>('news', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        authorImgUrl: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        imgUrl: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        timestamps: false,
    }
    )
    
};