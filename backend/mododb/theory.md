## drawback of storing dataa on json 
   1.secuirity
   2.reliablility
   3.portibility
   
   4.regular backups
   
   
  
## mongodb
SQL and No-sql
SQL
-postgres
-mssql
-Mysql

Nosql
-mogodb
-Dynamo Db



//////databases are used for storing data



### Mongodb
 -connection
 mongodb://localhost:27017/dbname



 ## which database we should choose 
 if we want our database as consisteance then we will use sql and if want our data to be flexible then we will use no sql 





 ## commands 
   -mongosh
   -show dbs -to show all the dbs
   -use dbname -to switch to some database
   -show collections 
   -db.data1.drop()


   ````
   db.name.insertOne({});
   db.name.find();
   db.findOne();
   


   ````


## sort ,limit ,filter
db.name.find({size:'l}).sort({
    name:1///-1 for deecending

})



