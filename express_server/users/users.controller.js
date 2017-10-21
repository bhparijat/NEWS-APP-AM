const dse = require('dse-driver');
const insertQuery = `insert into users ("username","email","contact","password") values(?,?,?,?)`;


const insertData =function(req,callback){
    const username=req.body.username;
    const email=req.body.email;
    const contact=req.body.contact;
    const password=Buffer.from(req.body.password,"utf8");
    const param=[username,email,contact,password];
    const client = new dse.Client({ contactPoints: ['127.0.0.1'], protocolOptions: { maxVersion:4 }
    ,keyspace:'user_database'});
    const insertQuery = `insert into users ("username","email","contact","password") values(?,?,?,?)`;

    client.execute(insertQuery,param, function(err, result) {
          if(err){
               console.log("some error occured while inserting");
                callback(err,req.body);
            }
            else{
            console.log("user has been inserted");
            callback(null,req.body);
            }

          });

};  
const sendDataById=function(user,callback){
    const params=[user.username];
    console.log('inside sendData by Id',params);
    const client = new dse.Client({ contactPoints: ['127.0.0.1'], protocolOptions: { maxVersion:4 }
    ,keyspace:'user_database'});
    const selectQuery=`select username,email,contact,password from user_database.users where username = ?`;
    client.execute(selectQuery, params ,function(err, result) {
        console.log("client execute");
            if(err){
            console.log("error");
            callback(err,{});
        }
        else if(result.rowLength == 0){
            console.log('no corresponding user found')
           callback(new Error('user name not found'));
        }else if(result.rows['0'].password.toString('utf8') != user.password){
            console.log('user found but password did not match')
             let obj=result.rows['0'].password;
         console.log('both passwords',obj.toString('utf8'),user.password)
   
           callback(new Error('password does not match please try again'));
        }
        else
        {
        console.log("user found and password matched");
  
        callback(null,result.rows['0']);
    }
      });
};
module.exports={
    insertData,
    sendDataById
}; 