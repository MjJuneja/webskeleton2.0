'use strict';

const User = require("../schemadefine");
const commonOperations=require("./commonoperations");

const dbOperations= {

    ////To show activation status
    checkActivation:function (Status,response){
        User.find({
            "useremail":Status.Email
        }
        ,function(error,result){
            if(error){
                console.log("Error Occured",error);
            }
            else{ 
                if(result.length<1){
                    response.json({message:"fail"});
                }
                else{
                    Status.ActivationStatus=result[0].emailverified;
                    response.send(Status);
                }
            }
        });
    },

    /////Send email activation link
    sendActivationLink:function(emailObject,response){
        var email=emailObject.email;
        commonOperations.sendLink(email,"emailactivate","emailactivationtoken");
        //need to be a callback function
        response.json({message:"success"});
    },

    //////Session destroy
    destroySession:function(request,response){
        const utils = require("../utils");
        if(request.body.appCall===true && request.body.sessionid!=""){
            utils.appSessionDestroy(request.body.sessionid,response);
        }
        else{
            utils.webSessionDestroy(request,response);
        }
    }

};

module.exports =dbOperations;