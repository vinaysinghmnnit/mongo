const MongoClient= require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/localhost',(err,db) => {
  if(err)
  {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb server');
  const DB=db.db('localhost');
  DB.collection('login').find({password:"pandit"}).toArray().then((docs)=>{
    console.log('localhost');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch localhost',err);
  });

  db.close();
});
