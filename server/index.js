import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';// import router tu cac file
import mongoose from 'mongoose';
const app = express();
const PORT = process.env.port || 5000;
const URI = 'mongodb+srv://admin:1234@mern-learnit.a0lrk.mongodb.net/?retryWrites=true&w=majority';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, limit:'30mb'}));
app.use(cors());

app.use('/posts',posts);// router den posts
mongoose
.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
   console.log('Connected to DB'); 
   app.listen(PORT, ()=>{
       console.log(`Server is runing on port ${PORT}`);
   });
})
.catch((err)=>{
    console.log('err', err);
});
// http://localhost:5000/


app.get('/',(req, res)=>{
    res.send('success')
});