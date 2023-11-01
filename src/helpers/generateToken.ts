import jwt from 'jsonwebtoken';
import config from '../constants';

export default class Token {

    static generateById (payloadValue: string): string {
        return jwt.sign({id: payloadValue}, '0000555500000AAAA');
    }

    static generateAny (key: string, value: string) {
        return jwt.sign({key: value}, config.SECRET_KEY);
    }
}   