import db from "../db/sequelize";
import { INewReply, IReplyDetails, IReplyFilter } from "../types/reply.types";

export class ReplyService {
    static async add (replyData: INewReply) {
        const createdReply = await db.CommentsModel.create({
            news_id: replyData.news_id,
            user_name: replyData.user_name,
            text: replyData.text,
            parent_id: replyData.parent_id,
            replyes_ids: [],
            published: new Date(),
            img_urls: replyData.img_urls
        });

        const sanitazedCreatedResult = createdReply.toJSON();
        return sanitazedCreatedResult
    }

    static async filter (filter: IReplyFilter): Promise<IReplyDetails[]> {
        const { news_id, parent_id } = filter;

        const replyes = await db.CommentsModel.findAll({
            where: {
                news_id,
                parent_id
            }
        });
        const result = replyes.map(item => {
            return {
                ...item.toJSON(),
            }
        })
        return result;
    }
}