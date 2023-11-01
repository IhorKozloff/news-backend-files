import { Sequelize } from 'sequelize';
import { UserModel } from '../../models/user.model';
import { CommentsModel } from '../../models/comment.model';
import { NewsModel } from '../../models/news.model';

const sequelize = new Sequelize('postgres://hojtflqx:dwS3XSSyEhC1iJWRiO86GVJACxoHfzgZ@flora.db.elephantsql.com/hojtflqx');

const User = UserModel(sequelize);
const Comments = CommentsModel(sequelize);
const News = NewsModel(sequelize);

export const setDatabaseConnection = () => {
    beforeAll(async () => {
        await sequelize.authenticate();

        await User.sync(),
        await Comments.sync()
    });

    afterAll(async () => {
        await sequelize.close();
    });
};