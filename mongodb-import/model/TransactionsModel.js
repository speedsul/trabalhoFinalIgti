import mongoose from 'mongoose';

const TransactionSchema = mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
    require: true,
  },
  month: {
    type: Number,
    require: true    
  },
  day: {
    type: Number,
    require: true    
  },
  yearMonth: {
    type: String,
    
  },
  yearMonthDay: {
    type: String,
  }
});

const TransactionModel = mongoose.model('transactions', TransactionSchema, 'transactions');
export  { TransactionModel };