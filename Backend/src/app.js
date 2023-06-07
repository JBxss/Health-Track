import express from "express";
import {dirname ,join} from 'path'
import path from "path";
import { fileURLToPath } from "url";

//import endopoint
import userRouter from './routes/user.routes.js';
import trackingRouter from './routes/tracking.routes.js'
import profileRouter from './routes/profile.routes.js'

const app = express();
app.use(express.json());

//-- para dar accesos desde cualquier servidor​
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
  
  //public
  const __dirname = dirname(fileURLToPath(import.meta.url)); //ruta
  const publicFolderPath = path.join(__dirname, 'public');
  
  //routes
  app.use('/healthTrack', userRouter);
  app.use('/healthTrack', trackingRouter)
  app.use('/healthTrack', profileRouter)
  app.use('/healthTrack', express.static(publicFolderPath));
  
  
//404
// app.use((req,res)=>{
//     res.status(404).json({
//         Error: 'Oops, page not found'
//     })
  
// })

//runing server
app.listen(3090, () =>{
    console.log('Server running on port 3090')
})