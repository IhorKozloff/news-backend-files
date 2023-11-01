import httpStatus from 'http-status';
import { Request, Response} from 'express';  
import { IGetCommentsRequest, NewCommentRequest } from '../types/comments.types';
import CommentsService from '../services/comments.service';

export class CommentsControler {
    static async list (req: Request, res: Response) {
        const { id } = req.params as unknown as IGetCommentsRequest;
        const result = await CommentsService.filter({ news_id: Number(id)});

        res.status(httpStatus.OK).json(result)
    }

    static async add (req: Request, res: Response) {
        const { name } = req.user;
        const { news_id, text, img_urls} = req.body as NewCommentRequest;

        const result = await CommentsService.add({
            news_id, 
            text, 
            user_name: name,
            img_urls
        });

        res.status(httpStatus.CREATED).json(result)
    }
}