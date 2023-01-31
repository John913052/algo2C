import router from './routes/routes.js';
import  Express  from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './databaseConnection/connectiondb.js';
const app=Express()

app.use(cors( ))
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup',router)

app.get('/',(req,res)=>{
    // const data=req.body
    // console.log(data)

    res.send("server working fine")
})
connectDB()
app.listen(8000,()=>{console.log('server start at 8000')})