const express=require('express');
const app=express();
app.get('/', (req, res) => {
    res.send('hi hhhh ddddd')
})
app.listen(8000,()=>{console.log('server start at 8000')})