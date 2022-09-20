'use strict'
require('dotenv').config()

const Answer= require("../model/answermodel");


exports.CreateQuestion=async(req,res)=>{

    const {question}=req.body;
    console.log(req.body)
    


    try{
       
            const user=await Answer.create({
                question:question,
                answer:""
            })
            if(user){
                res.status(201).json(
                    {
                    success:true,
                    message:"QA added",
                    response:"done"}
                );
            }   
        
    }catch(err){
        res.status(400).json(
            {
            success:false,
            message:"Question not added",
            response:"not done"}
        );
    }

}

exports.addAnswer=async(req,res)=>{

    const {_id,answer}=req.body;
    
    try{
       
            const user=await Answer.findByIdAndUpdate({_id},{answer})
            if(user){
                res.status(201).json(
                    {
                    success:true,
                    message:"answer added",
                    response:"done"}
                );
            }   
        
    }catch(err){
        res.status(400).json(
            {
            success:false,
            message:"Answer added",
            response:"not done"}
        );
    }

}



exports.GetQuestion=async(req,res)=>{

 

    try{
        const answer=await Answer.find({}).sort({'createdAt':-1}).limit(10);
       
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




