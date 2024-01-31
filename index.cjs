
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const expenseModal = require('./model')
const cors = require("cors");

const app = express();
app.use(express.static(__dirname));
app.use(cors());
app.use(bodyParser.json()) // bodyParser -> converts body to an understandable form

mongoose
  .connect('mongodb+srv://sanjeevrathan4444:Sanjeev123@cluster1.smcmkmx.mongodb.net/?retryWrites=true&w=majority', {
    // .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err))

app.get('/expense',(req,res)=>{
    res.status(200).json({
        status:'success',
        data:['data']
    })
})

app.post('/add-expense', async function(req, res) {
    try{
        const expense = await expenseModal.create(req.body)
        res.status(201).json({
            status:'success',
            data:{
                expense
            }
        })
    }catch(err){
        const {message} = err.errors.name
        res.status(200).json({
            status:'fail',
            error: message
        })
    }
})

app.listen(8080,()=>{
    console.log('server listening on port 8080')
})