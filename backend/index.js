import  express, { response }  from "express";
import { PORT , mongoDBURL } from "./config.js";
import mongoose from "mongoose"
import { Book } from "./models/booksModels.js";
import booksRoute from "./routes/booksRoutes.js"
import cors from "cors"

const app = express();

app.use(express.json());

app.use(cors());//fisst method for cors

// app.use(cors({
//     origin:'https://localhost:3000',
//     method:['GET','POST','PUT','DELETE'],
//     allowwedHeaders:['Content-Type'],
// })
// )

app.get("/",(req, res)=>{
    return res.status(234).send("Welcom ")
})

app.use('/books',booksRoute);









mongoose.connect(mongoDBURL).then(()=>{
    console.log("App is Conneted To Database");
    app.listen(PORT,()=>{
        console.log(`App Listenig to the port ${PORT}`);
    })
})
.catch((e)=>{
console.log(e);
})