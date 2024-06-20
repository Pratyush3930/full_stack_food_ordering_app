// in package.json we changed type to module 
// The "type": "module" field in your package.json file specifies that the code in your project should be treated as ECMAScript modules (ESM) rather than CommonJS modules
//  and this is how we import the packages in this module
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoutes.js';

// app config
const app = express()
const PORT = 4000;

// middleware
app.use(express.json()) // to parse json data
app.use(express.urlencoded({extended: true}))
// to parse data sent directly through url
app.use(cors())

//db connection
connectDB();

// api endpoint
app.use("/api/food", foodRouter)

app.get("/", (req,res) => {
    res.send("API working")
})

app.listen(PORT,() => console.log(`App listening on port ${PORT}`))

// 