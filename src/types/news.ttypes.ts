import { Model, InferAttributes, InferCreationAttributes } from 'sequelize';

export interface INews {
    id: number;
    title: string;
    author: string;
    authorImgUrl: string;
    imgUrl: string;
    content: string;
};

export interface INewsDetails extends INews {
    comentsQuantity: number;
}

export interface NewsModelType extends Model<InferAttributes<NewsModelType>, InferCreationAttributes<NewsModelType>>, INews {

};