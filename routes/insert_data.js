var express = require('express');
var router = express.Router();


const oracledb = require('oracledb');
oracledb.autoCommit = true;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.post('/', function(req, res, next) {

 
 
  // (async function() {
  //   try{
    
  //      connection = await oracledb.getConnection({
  //           // user : 'sadmin',
  //           // password : 'Kolkata#1',
  //           // connectString : 'localhost/ORCL'

  //           user : req.app.locals.user,
  //           password : req.app.locals.password,
  //           connectString : req.app.locals.connect_string


  //      });
  //      console.log("Successfully connected to Oracle!")



  //     var email = req.body.email;
  //     var pwd = req.body.pwd;
  //      const sqlQuery = `INSERT INTO employees VALUES (:0, :1, :2)`;  
  //      binds = [['1',email, pwd]]
   
  //      result =  await connection.executeMany(sqlQuery, binds, {});
     
  //      console.log("Number of inserted rows:", result.rowsAffected);
   
     


  //   } catch(err) {
  //       console.log("Error: ", err);
  //     } 
  //     finally {
  //       if (connection) {
  //         try {

  //           await connection.close();
  //           console.log("Connection closed")
  //         } catch(err) {
  //           console.log("Error when closing the database connection: ", err);
  //         }
  //       }
  //     }
  //   })()

  

    
    

    // res.render('insert_data',{email:email,pwd:pwd})


    var email = req.body.Retirement_System
  // res.send('respond with a resource '+email);

  res.render('insert_data',{email:email})


});


module.exports = router;
