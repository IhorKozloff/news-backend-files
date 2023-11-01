import httpStatus from "http-status";
import { AuthService } from "../services/auth.service";
import { IUser, IUserLogoutRequest } from "../types/user.types";
import { Request, Response} from 'express'; 
import { AppError } from "../types/AppError";
import { errorMessages } from "../error-messages";

export class AuthController {
    static async register (req: Request, res: Response) {
        const registerData = req.body as unknown as IUser;
        const result = await AuthService.register(registerData);

        res.status(httpStatus.CREATED).json(result);
    }

    static async login (req: Request, res: Response) {
        const loginData = req.body as unknown as Omit<IUser, 'name'>
        const result = await AuthService.login(loginData);

        res.status(httpStatus.OK).json(result);
    }

    static async logout (req: Request, res: Response) {
        const { id } = req.params as unknown as IUserLogoutRequest;
        const user = req.user;

        if (id !== user.id) {
            throw new AppError(400, errorMessages.AUTH.AUTHORIZATION_ERROR)
        }
        
        await AuthService.logout(user.id);
        res.status(httpStatus.NO_CONTENT).json();
    }
}