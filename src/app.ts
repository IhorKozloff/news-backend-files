import dotenv from 'dotenv';
dotenv.config();
import express, { NextFunction } from 'express';
import cors from 'cors';
import { Request, Response} from 'express';  
import httpStatus from 'http-status';
import rootRouter from './routes';
import { AppError } from './types/AppError';


const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static("src/public"))

app.use('/api', rootRouter);

app.get('/test', (req: Request, res: Response) => {
    res.status(httpStatus.OK).json({
        message: 'Oke))!'
    });
});

app.use((err: Error | AppError, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        const { code = 500, message = 'General Server Error' } = err;
        res.status(code).json({ message });
    } else {
        console.log(err)
        const { message } = err;
        res.status(500).json({ message });
    } 
});

export default app;