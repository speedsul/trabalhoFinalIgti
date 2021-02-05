import express from 'express'
import {TransactionModel} from '../model/TransactionsModel.js'
const RouteCompras = express();

RouteCompras.get('/compras', async (req, res)=> {
  try{
    const compras = await TransactionModel.find({})
    
    res.send(compras)
  }catch(err){
    console.log(err)
  }
})
RouteCompras.get('/transaction',async (req, res)=> {
  try{
    // const type = req.params.search
    const { period } = req.query;
    console.log(period)
    const compras = await TransactionModel.find({yearMonth: period})
    console.log()
    let result = { length:compras.length, transactions: compras}
    res.send(result)
  }catch(err){
    console.log(err)
  }
})
RouteCompras.get('/users',(req, res)=> res.send("users"))
RouteCompras.get('/user',(req, res)=> res.send("user"))


export {RouteCompras}