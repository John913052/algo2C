import router from './routes/routes.js';
import  Express  from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const app=Express()

app.use('/signup',router)

// const corsOptions = {
  //       origin: ['https://8000-john913052-algo2c-4inhxyga5u4.ws-us84.gitpod.io','https://3000-john913052-algo2c-4inhxyga5u4.ws-us84.gitpod.io'],
  //       optionsSuccessStatus: 200
  //     }

  app.use(cors())
  
  app.use(bodyParser.json({ extended: true }));
  app.use(bodyParser.urlencoded({ extended: true }));
  
app.get('/',(req,res)=>{
  res.send('working')
})
app.listen(5000,()=>{console.log('server start at 5000')})