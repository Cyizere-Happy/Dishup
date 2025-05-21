const express = require('express')
const multer = require('multer')
const { addFood, listFood, removeFood } = require('../controllers/foodController.js');

const foodRoute = express.Router()

//Defining the storage for the image
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,callback)=>{
        const savedName = `${Date.now()}-${file.originalname}`
        callback(null,  savedName)
    }
})

//middle-ware to upload
const upload = multer({storage: storage})

//now the foodRoute defined
foodRoute.post('/add', upload.single("image"), (req, res, next) => {
    console.log("Received request to /add");
    console.log("File:", req.file);
    console.log("Body:", req.body);
    next();
}, addFood);

//Listing Food
foodRoute.get('/list', listFood)

//Removing Food
foodRoute.post('/remove', removeFood)


module.exports = foodRoute

