import { Model, InferAttributes, InferCreationAttributes } from 'sequelize';
import { Request, Response} from 'express';  

export interface IComment {
    user_name: string;
    text: string;
    parent_id: string | null;
    replyes_ids: string[];
    news_id: number;
    img_urls?: string[];
}

export type NewCommentRequest = Pick<IComment, | 'text' | 'news_id' | 'img_urls'>;
export type NewComment = NewCommentRequest & Pick<IComment, "user_name">;

export interface ICommentDetails extends IComment {
    id?: string;
    published: Date;
}

export interface ICommentsFilter {
    news_id: number;
}

export interface IGetCommentsRequest {
    id: string;
}

export interface CommentModelType extends Model<InferAttributes<CommentModelType>, InferCreationAttributes<CommentModelType>>, ICommentDetails {

};