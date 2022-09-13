'use strict'
require('dotenv').config()

const UserModel= require("../model/UserDetail");





exports.Getdevice=async(req,res)=>{

 

    try{
        const answer=await UserModel.find({}).sort({'createdAt':-1}).limit(10);
       
        if(answer){
            res.status(200).json(
                {
                success:true,
                message:"device",
                response:answer}
            );
        }
    }catch(err){
        res.status(400).json(
            {
            success:false,
            message:"No ",
            response:"not done"}
        );
    }

}




