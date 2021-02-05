const mongoose = require('mongoose');

let schema = mongoose.Schema({
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
    require: true,
  },
  day: {
    type: Number,
    require: true,
  },
  yearMonth: {
    type: String,
  },
  yearMonthDay: {
    type: String,
  },
});

const TransactionModel = mongoose.model('transaction', schema);

module.exports = TransactionModel;
