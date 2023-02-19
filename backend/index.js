import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import tourRoute from './routes/tours.js';





dotenv.config()
const app = express();
const port = process.env.PORT || 8000;


// conexionde base de datos 
mongoose.set("strictQuery", false);
const connect = async () => {

    try{
await mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true, 
    useUnifiedTopology:true
})
console.log('base de datos de mongo conectada');

    }catch(err){
        console.log('conexion fallidad con base de datos de mongo');
    }
}
// for testing 

app.get ("/", (req, res) =>{
    res.send('api is working')
})



// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/tours', tourRoute)


app.listen(port,() => {
    connect();
console.log('listening on port', port);
});