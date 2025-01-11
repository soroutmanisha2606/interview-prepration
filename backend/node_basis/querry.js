
db.employees.insertMany([
    {empId: 1, name: 'Clark', dept: 'Sales' ,age:20},
    {empId: 2, name: 'Dave', dept: 'Accounting' ,age:23},
    {empId: 3, name: 'Ava', dept: 'Sales',age:72 ,last_name:s='sharma'}
  ]);
  
  // db.employees.find({}).pretty();
  // db.employees.find({name:'Dave'}).pretty();
  // find all employess greter than 21
  // db.employees.find({age:{$gte:21}}).pretty();
  // db.employees.find({age:{$lte:22}}).count();
  // db.employees.find({last_name:{$exists:"true"}}).pretty();
  // lastnem and name:'Ava'
  // db.employees.find({$and:[{name:'Ava'},{last_name:{$exists:'true'}}]}).count();
  
  
  
  //Retrieve all employees from the Sales department.
  
  // db.employees.find({dept:'Sales'}).count();
  //Sort the employees by age in descending order.
  // db.employees.find().sort({age:1});
  //Fetch only the first two employees sorted by name in ascending order.
  // db.employees.find().sort({name:1}).limit(2);
  //Retrieve only the name and dept fields for all employees.
  // db.employees.find({},{name:1,dept:1});
  //Exclude the age field from the query results for all employees
  // db.employees.find({},{age:0});
  // filtering
  //Find employees who belong to either the Sales or Accounting department.
  // db.employees.find({$or:[{dept:'Accounting'},{dept:'Sales '}]});
  //Updating Documents
  //Update the department of the employee with empId 3 to Marketing
  // db.employees.updateOne({empId:3},{$set:{dept:'Marketing'}})
  //
  
  // db.employees.updateMany({},{$set:{salary:5000}});
  // Aggregation Framework
  //Group employees by dept and count the number of employees in each department.
  // db.employees.aggregate([{
  //   $group:{_id:"$dept",count:{$sum:1}}}]);
  //   db.employees.aggregate([{$group:{_id:'$dept',average:{$avg:'$age'}}}])
  // db.employees.find().pretty();
  //Find documents where last_name exists in the collection.
  db.employees.find({last_name:{$exists:'true'}})