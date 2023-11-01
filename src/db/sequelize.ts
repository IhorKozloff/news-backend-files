import { Sequelize } from 'sequelize';
import { UserModel } from '../models/user.model';
import { CommentsModel } from '../models/comment.model';
import { NewsModel } from '../models/news.model';
import config from '../constants';

const sequelize = new Sequelize(config.DB_URL);
const User = UserModel(sequelize);
const Comments = CommentsModel(sequelize);
const News = NewsModel(sequelize);

export default {
    sequelize,
    UserModel: User,
    CommentsModel: Comments,
    NewsModel: News
};