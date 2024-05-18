import user from './user';
import auth from './auth';
import { notFound } from '../middlewares/handle_errors';

const initRouter = (app) => {

    app.use('/api/v1/user', user)
    app.use('/api/v1/auth', auth)

    app.use('/', notFound)

    // return app.use('/', (req, res) => {
    //     return res.send('SERVER ONN')
    // })
}

module.exports = initRouter