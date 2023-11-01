import app from './src/app';
import db from './src/db/sequelize';
import config from './src/constants';

db.sequelize.authenticate().then(() => {
    console.log('database has connected');
})
.then(() => {
    Promise.all([
        db.UserModel.sync(),
        db.CommentsModel.sync(),
        db.NewsModel.sync()
    ])
})
.then(() => {
    app.listen(process.env.PORT || config.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT || config.PORT}`);
    })
})
.catch((error:any) => {
    console.error('Unable to connect to the database:', error);

})
