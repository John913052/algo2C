import router from './routes/routes.js';
import  Express  from 'express';
import cors from 'cors';
const app=Express()
app.use('/signup',router)
const corsOptions = {
    origin: ['https://5000-john913052-algo2c-4inhxyga5u4.ws-us84.gitpod.io', 'https://5000-john913052-algo2c-4inhxyga5u4.ws-us84.gitpod.io'],
    optionsSuccessStatus: 200
  }
app.use(cors(corsOptions))
app.get('/', (req, res) => {
    res.send('hi hhhh ddddd')
})
app.listen(5000,()=>{console.log('server start at 8000')})