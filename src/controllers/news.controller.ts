import NewsService from '../services/news.service';
import httpStatus from 'http-status';
import { Request, Response} from 'express';  

class NewsController {
    static async getAllNews(req: Request, res: Response) {
        const result = await NewsService.getAllNews();
        res.status(httpStatus.OK).json(result);
    }

    static async getNewsDetails (req: Request, res: Response ) {
        const newsId = req.params.id;
        const result = await NewsService.getNewsDetails(Number(newsId));
        res.status(httpStatus.OK).json(result);
    }
}

export default NewsController;