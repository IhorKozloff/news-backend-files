import db from '../db/sequelize';
import { ICommentDetails, ICommentsFilter, NewComment } from "../types/comments.types";

export default class CommentsService {

    static async filter (filter: ICommentsFilter): Promise<ICommentDetails[]> {
        const { news_id } = filter;

        const comments = await db.CommentsModel.findAll({
            where: {
                news_id,
                parent_id: null,
            }
        });
        const result = comments.map(item => {
            return {
                ...item.toJSON(),
            }
        })
        return result;
    }

    static async add (commentData: NewComment): Promise<ICommentDetails> {
        const createdComment = await db.CommentsModel.create({
            news_id: commentData.news_id,
            user_name: commentData.user_name,
            text: commentData.text,
            parent_id: null,
            replyes_ids: [],
            published: new Date(),
            img_urls: commentData.img_urls
        });

        const sanitazedCreatedResult = createdComment.toJSON();
        return sanitazedCreatedResult
    }
};