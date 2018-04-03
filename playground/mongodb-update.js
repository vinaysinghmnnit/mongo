const MongoClient= require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/localhost',(err,db) => {
  if(err)
  {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb server');
  const DB=db.db('localhost');
  DB.collection('login').findOneAndUpdate(
    {
    _id: '5aa9fcccd88b5bb289e53c5d'
   },
   {
    $set:{
      username:'vinay'
        },
  },
  {
      returnOriginal:false
  })
  .then(
    (result)=>{
    if(result)
    console.log(result);
  }
)

  db.close();
});
