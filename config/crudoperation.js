var User = require("./schemadefine");
var dbOperations= {


checkUser:function (userObject,response){
    
    
    User.find({"useremail":userObject.useremail},function(error,result){
    if(error){
       console.log("Error Occured",error);
   }
    else{ 
        
       console.log(result);
        //console.log(result[0].useremail);
       //console.log(result.username); 
        if(result[0]!=undefined){
            console.log("found");
            response.json({msg:"Email already registered"});
        }
        else
            {
                console.log("notfound");
                caller.checkusernamecaller(userObject,response);
            }
        //response.json({result});
        
        //response.json({msg:"Logged in SuccessFully..."});
       //loginObject.logintoken=true;
        //return loginObject.logintoken;
   }
});
}    
,   
checkUsername:function (userObject,response){
    
    
    User.find({"username":userObject.username},function(error,result){
    if(error){
       console.log("Error Occured",error);
   }
    else{ 
        
      console.log(result);
        //console.log(result[0].useremail);
       //console.log(result.username); 
        if(result[0]!=undefined){
            console.log("found");
            response.json({msg:"Username is already taken"});
        }
        else
            {
                console.log("notfound");
                caller.registercaller(userObject,response);
            }
        //response.json({msg:"Logged in SuccessFully..."});
       //loginObject.logintoken=true;
        //return loginObject.logintoken;
   }
});
}    
,   
addUser:function(data,response){
User.create(data,function(error,result){
    
     //User.create({"name":"Ram","phone":[2222,3333],"address":[{"state":"Delhi","pincode":2222},{"state":"Delhi","pincode":2222}]},function(error,response){
   if(error){
       response.json({"msg":"Can't Add Error Occured, Try later"});
   }
    else{
       response.json({"msg":"Register SuccessFully...","finaldata":result});
        console.log(result);
   }

});
}
,
doLogin:function (request,response){
    
    var loginObject=request.body;
    User.find({
     "$and":[
        {
            "$or": [{
        "useremail":loginObject.loginid
        }, 
                       {
        "username": loginObject.loginid
        }]
        },
         {
             "password1":loginObject.loginpassword
         }
      ]
    },function(error,result){
    if(error){
       console.log("Error Occured",error);
   }
    else{ 
        var message; 
       console.log(result);
        if(result.length<1){
            response.json({msg:"fail"});
        }
        else{
            response.json({msg:"success"});
            // request.session.zzzzz="mymail";
            // console.log("session is "+request.session.zzzzz);
            //response.send("session is "+request.session.zzzzz);
        }
        
        //response.json({msg:"Logged in SuccessFully..."});
       
   }
});
}
,
sendCode:function (codeObject,response){
    

   
    User.find({"useremail":codeObject.cemail},function(error,result){
    if(error){
       console.log("Error Occured",error);
   }
    else{ 
        
       console.log(result);
        //console.log(result[0].useremail);
       //console.log(result.username); 
        if(result[0]!=undefined){
            console.log("found");

            var code = (Math.floor(100000 + Math.random() * 900000)).toString();
            code = Math.floor(code.substring(-2)/100);   
            if(code<1000)
            {
                code=code+1000;
            }

            codeObject.fcode=code;
            caller.savecode(codeObject,response);

        }
        else
            {
                console.log("notfound");
                response.json({msg:"Email not registered"});
            }
       
   }
});
},

forgotpass:function (codeObject,response){
    

  
    console.log(codeObject.fcode);
    User.update({useremail:codeObject.cemail}, {$set:{forgotpasscode:codeObject.fcode}},function(error,result){
    if(error){
       console.log("Error Occured",error);
   }
    else{ 
        
       console.log(result);
       response.json({msg:"found",code:codeObject.fcode});
       
   }
});
}  

}
module.exports =dbOperations; 

var caller={
    
    checkusernamecaller:function(data,response){
        dbOperations.checkUsername(data,response);
    },
    registercaller:function(data,response){
        dbOperations.addUser(data,response);
    },
    savecode:function(data,response){
        dbOperations.forgotpass(data,response);
    }
}
//findUser("Ram");
