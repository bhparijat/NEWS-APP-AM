const express = require('express');
const controller = require('./users.controller.js');
const passport = require ('passport');
const local = require('passport-local').Strategy;
const router = express.Router();

router.post('/users', (req, res) => {
  controller.insertData(req, (err, result) => {
   
    if (err) {
      console.log('error in posting',err);
      res.status('500').send('cannot post to favourites'+'\n'+err);
    } else { res.send(req.body); }
  });
});
passport.use(new local(
 function(username,password,done){
    controller.sendDataById({username:username,password:password}, (err, user) => {
        console.log('inside passport use')
        try{
        if (err) {
         throw err
          
        }else { 
          return done(null,user);
      }
         
      }catch(err){
        return done(null,null);
      }
 }
);
 }));
router.get('/dashboardUser',(req,res)=>{
    console.log('inside dashboard user',req.user);
    return res.status('200').send(req.user.username);
})
router.get('/loginUser',(req,res)=>{
    console.log('inside login user',null)
    
    return res.status('200').json();
})
router.post('/loginUser',(req,res)=>{
  console.log('inside login user')
  return res.status('200').send('failed to log in');
})
router.post('/login',
  passport.authenticate('local',{
                                   successRedirect:'/dashboardUser',
                                   failureRedirect:'/loginUser',
                                   failureFlash:true
                                 }),  

(req, res) => {
 
});

module.exports = router