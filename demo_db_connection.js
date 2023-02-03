const { prototype } = require('formidable/src/PersistentFile');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Went1228",
  port: "3308"
});
function myFunction(){
  console.log('Connected to the database!');

  // Get data from the database
  const id = 1; // Replace with the input ID
  const query = "SELECT * FROM mydb.test WHERE ID_NUM ="+id+" ;"
  con.query(query, [id], (error, results) => {
    if (error) {
      console.error('Error retrieving data from the database: ' + error.stack);
      return;
    }
    console.log('Data:', results);
  });
}
                                                                                              
function test(){
  const id = 1; // Replace with the input ID
  const query = "SELECT * FROM mydb.test WHERE ID_NUM ="+id+" ;"
  con.query(query, [id], (error, results) => {
    if (error) {
      console.error('Error retrieving data from the database: ' + error.stack);
      return;
    }
    console.log('Data:', results);
  });
}




module.exports = myFunction()
module.exports = test()
