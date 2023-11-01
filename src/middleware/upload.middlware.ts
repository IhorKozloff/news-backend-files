import httpStatus from 'http-status';
import multer from 'multer';
import { AppError } from '../types/AppError';
const path = require('path')
const fs = require('fs');


const storage = multer.diskStorage({
    destination ( req, file, cb ) {

        // const uploadDirectory = path.join(__dirname, 'users-images');

        // if (!fs.existsSync(uploadDirectory)) {
        //     fs.mkdirSync(uploadDirectory);
        // }

        console.log(file)

        //console.log(uploadDirectory)
        cb(null, 'src/public/users-images');
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