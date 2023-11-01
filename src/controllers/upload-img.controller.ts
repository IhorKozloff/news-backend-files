import { Request, Response} from 'express'; 
import httpStatus from 'http-status';

export class UploadImgController {
    static async save (req: Request, res: Response) {

        const file = req.file;

        res.status(httpStatus.OK).json({
            img_url: `${file?.path.split('src/public/')[1]}`
        })
    }
}
