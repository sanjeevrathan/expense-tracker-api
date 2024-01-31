const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, 'A expense must have a name'],
        unique: true,
        minLength:[5, 'The minimum characters should be 5'] ,
        maxLength:[10, 'Maximum characters should be 10']
      },
      
      priceAmount: {
        type: Number,
        required: [true, 'A expense must have a price'],
      }
    }
  );

  const expense = mongoose.model('Expense', expenseSchema);

 module.exports = expense
