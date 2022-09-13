'use strict'
require('dotenv').config()

const Answer= require("../model/answermodel");


exports.CreateQuestion=async(req,res)=>{

    const {question,answer,code}=req.body;
    


    try{
        if(code===process.env.CODE){
            const user=await Answer.create({
                question,
                answer
            })
            if(user){
                res.status(201).json(
                    {
                    success:true,
                    message:"QA added",
                    response:"done"}
                );
            }
        }else{
            res.status(200).json(
                {
                success:true,
                message:"added",
                response:"done"}
            );
        }
        
    }catch(err){
        res.status(400).json(
            {
            success:false,
            message:"QA not added",
            response:"not done"}
        );
    }

}



exports.GetQuestion=async(req,res)=>{

 

    try{
        const answer=await Answer.find({}).sort({'createdAt':-1}).limit(10);
        console.log(answer);
        if(answer){
            res.status(200).json(
                {
                success:true,
                message:"question answer",
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




