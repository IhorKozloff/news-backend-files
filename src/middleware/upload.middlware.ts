import httpStatus from 'http-status';
import multer from 'multer';
import { AppError } from '../types/AppError';
const path = require('path')

const storage = multer.diskStorage({
    destination ( req, file, cb ) {
        console.log(file)
        const uploadFolderPath = path.join(__dirname, '..', 'public/user-images')
        console.log(uploadFolderPath)
        cb(null, uploadFolderPath);
    },
    filename (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const types = ['image/png', 'image/gif', 'image/jpg', 'image/jpeg'];

const fileFilter = (req:any, file:any, cb:any) => {

    if(types.includes(file.mimetype)) {
        cb(null, true);
    } else {
        const newError = new AppError(httpStatus.BAD_REQUEST, 'Incorrect image format');
                
        cb(newError, false)
    }
}

export default multer({storage, fileFilter});