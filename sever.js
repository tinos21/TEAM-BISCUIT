//------------------------------------------database----------------------------------------------------
/*const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:12345@cluster0.qahx9.mongodb.net/CS490?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
      const collection = client.db("test").collection("devices");
// perform actions on the collection object

console.log("Database connected!")
client.close();
});*/

function createCollection(name){
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb+srv://biscuit_admin:Buttered_Biscuits00@biscuitcluster0.xom7t.mongodb.net/CS490?retryWrites=true&w=majority';
    MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log('database created');
    var dbase = db.db("CS490");
    dbase.createCollection(name, function (err, res) {
        if (err) throw err;
        console.log("collection created");
        db.close();
       });
   });
}

//createCollection('try');

function insertUserData(email, firstName, lastName, password, username){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://biscuit_admin:Buttered_Biscuits00@biscuitcluster0.xom7t.mongodb.net/CS490?retryWrites=true&w=majority";
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("CS490");
        var newobj = { email: email, firstName: firstName, lastName: lastName, password: password,username: username};
        dbo.collection('users').insertOne(newobj, function(err, res) {
            if (err) throw err;
            console.log("data insert sucessfully");
            db.close();
        });
    });
}

//insertUserData('826496044@qq.com', 'Zixin1', 'Zhuang', '123', 'zz435');

 function getPassWord(username, password){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://biscuit_admin:Buttered_Biscuits00@biscuitcluster0.xom7t.mongodb.net/CS490?retryWrites=true&w=majority";
 
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("CS490");
    var whereStr = {username:username, password:password};  
    //var save = dbo.collection('users').find(whereStr, {_id:0,email:0, firstName:0,lastName:0, username:0});
    dbo.collection('users').find(whereStr).project({password:1, _id:0}).toArray(function (err, result) {
        if (err) throw err;
        //var pswd =result[0];
        console.log(result);
        if(result.length==0){
            return false;
        }else{
            return true;
        }
        db.close();
        
        
        
        });
    });
    return s;
}

var status; 
status = getPassWord("zz435",'1234');
console.log(status);
