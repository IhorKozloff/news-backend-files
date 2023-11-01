import { INews, INewsDetails } from "../types/news.ttypes";
import db from '../db/sequelize';
import { errorMessages } from "../error-messages";

export default class NewsService {

    static async getAllNews (): Promise<Omit<INews, 'content'>[]> {
        const news = await db.NewsModel.findAll({
            attributes: { exclude: ['content'] }
        });
        return news.map(item => item.toJSON());
    }

    static async getNewsDetails (newsId: number): Promise<INewsDetails> {
        const news = await db.NewsModel.findByPk(newsId);

        if (!news) {
            throw new Error(errorMessages.NEWS.NOT_FIND)
        }
        
        const commentsResult = await db.CommentsModel.findAll({
            where: {
                news_id: newsId,
                parent_id: null,
            }
        });

        return {
            ...news.toJSON(),
            comentsQuantity: commentsResult.length
        }
    }
};