const MongoClient= require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/localhost',(err,db) => {
  if(err)
  {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb server');
  const DB = db.db('localhost');
  DB.collection('ToDo').insertOne({
    test:'Something to do',
    completed:false
  },(err,result) =>{
    if(err)
    {
      return console.log('Unable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });
  db.close();
});
