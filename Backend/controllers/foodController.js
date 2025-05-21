const express = require('express')
const fs = require('fs')
const foodModel = require('../Models/FoodSchema.js')
const debug = require('debug')('app:foodController')

const addFood = async (req, res) => {
    console.log("Received request to add food");
    console.log("Request body:", req.body); 

    //Checks if All the required Field are filled
    if (!req.body.name || !req.body.description || !req.body.price || !req.body.category || !req.file) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }
      
    //Check if the Food is already in the DB
    const foodName = req.body.name.trim().toLowerCase();
    const existingFood = await foodModel.findOne({ name: foodName });
    
    if (existingFood) {
        return res.status(400).json({ success: false, message: "Food already exists in the DB" });
    }
    
    let image_filename = req.file ? req.file.filename : null;
    
    //Adding the food
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await food.save();
        res.status(201).json({ success: true, message: "New Food added successfully", food });
        debug(food);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", details: error.message });
        debug('We couldn\'t add the food', error);
    }
}

//Listing Foods
const listFood = async (req,res)=>{
    const foods = await foodModel.findOne({})
    try{
        console.log('Listing Foods in DB')
        res.status(200).send({sucess:true, data: foods})
    }catch(error){
        console.log('Couldn\'t list the foods in the db')
        res.status(400).send({success:false, message:"invalid Request"})
    }
}


//Removing Foods
const removeFood = async (req,res)=>{
    try{
        const food = await foodModel.findById(req.body.id)
        if(!food){
            res.status(400).send({success:false, message:"Food not found"})
        }
        fs.unlink(`uploads/food.image`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id)
        res.status(200).send({success:true, message:"Food deleted successfully"})
    }
    catch(error){
        console.log(error)
        res.status(400).send({success:false, message:"invalid Request"})
    }
}

module.exports = {addFood, listFood, removeFood};
