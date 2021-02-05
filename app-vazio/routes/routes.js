const express = require('express');
const TransactionModel = require('../models/TransactionModel.js')
const transactionRouter = express.Router();

//api/transaction?period=2019-04
transactionRouter.get('/transaction', async (req, res) => {
  try {
    const { period } = req.query;    
    const transactions = await TransactionModel.find({ yearMonth: period });    
    let result = { length: transactions.length, transactions };
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});
//CREATE api/transaction
transactionRouter.post('/transaction', async (req, res) => {
  try {     
    const transactions = new TransactionModel( req.body );    
    await transactions.save()
    res.status(200).send(transactions);
  } catch (err) {
    console.log(err);
  }
});

//UPDATE api/transaction
transactionRouter.patch('/transaction/:id', async (req, res) => {
  try {     
    const id = req.params.id;
    const transactions = await TransactionModel.findByIdAndUpdate({_id: id}, req.body, {new: true} );    
    
    res.status(200).send(transactions);
  } catch (err) {
    console.log(err);
  }
});



module.exports = transactionRouter;
