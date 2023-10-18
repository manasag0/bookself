import express, { response } from "express";
import  {PORT , mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import bookRoute from "./bookRoutes/bookRoute.js";
const app = express();
  
app.use(express.json());
app.use("/books",bookRoute)

app.get('/',(req,res)=>{
    console.log(req)
    return res.status(200).send("Welcome to MERN stack lession")
})
 

mongoose.connect(mongoDBURL)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((error)=>{
    console.log('Error connecting to MongoDB: ', error);
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})


