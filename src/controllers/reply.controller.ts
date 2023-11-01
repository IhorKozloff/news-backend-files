import { Request, Response} from 'express'; 
import httpStatus from 'http-status';
import { IGetReplyRequestParams, IGetReplyRequestQuery, NewReplyRequest,  } from '../types/reply.types';
import { ReplyService } from '../services/reply.service';

export class ReplyController {
    static async add (req: Request, res: Response) {
        const { name } = req.user;
        const { news_id, parent_id, text, img_urls} = req.body as NewReplyRequest;

        const result = await ReplyService.add({
            news_id,
            text,
            parent_id,
            user_name: name,
            img_urls
        });

        res.status(httpStatus.CREATED).json(result)
    }

    static async list (req: Request, res: Response) {
        const { id } = req.params as unknown as IGetReplyRequestParams;
        const { parent_id } = req.query as unknown as IGetReplyRequestQuery;

        const result = await ReplyService.filter({ 
            news_id: Number(id),
            parent_id
        });

        res.status(httpStatus.OK).json(result)
    }
}