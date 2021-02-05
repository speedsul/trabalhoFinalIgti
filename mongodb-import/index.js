import express from 'express'
import mongoose from 'mongoose'
import env from 'dotenv'
import { RouteCompras } from './routes/compras.js';
const {PORT, URI_MONGO} =  env.config().parsed;

(async () => {
  try{
 await mongoose.connect(URI_MONGO, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false  })
 console.log("Conectado ao mongo com sucesso")
  }catch(error) {
    console.log("erro ao se conectar ao mongoDB", error)
  }
})();
const App = express();
App.use(express.json())
App.use('/api', RouteCompras)
App.listen(PORT|3000,()=>console.log("Servidor rodado"))