var express=require('express');
var bodyParser=require('body-parser');


var {mongoose}=require( './db/mongoose');
var {Todo}=require('./models/Todo');
var {user}=require('./models/user');


var app=express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo=new Todo({
    text:req.body.text,
    mail:req.body.mail
  });
  todo.save().then((doc)=>{
  res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  })
});

app.get('/todos/:id',(req,res)=>{
  res.send(req.params);
});
app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  })
})


app.listen(3000,()=>{
  console.log('Started on port 3000');
});
