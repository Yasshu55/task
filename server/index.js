/*
In  home page 1 input box
and add more button made
When we click on add more it again add 1 input boxes open {down or top}),
(Made submit button after click on submit data save in mongo
controller and route made seperate in backend
made only {post and get} in crud  in that input box. { not make  edit and delete in crud }
Use redux toolkit (if you know)
Made like todo app

*/

const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const { model } = require("mongoose");

require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors({origin:"*"}));
app.use(cors());

mongoose.connect(`mongodb+srv://${process.env.USER_DB}:${process.env.USER_PB}@cluster0.3osfkny.mongodb.net/?retryWrites=true&w=majority`)
.then(() => console.log('DB Connected!'))
.catch((err) =>{ console.log(err);})

let inputSchema = new mongoose.Schema({
    inputData: String
});

let User = mongoose.model("User", inputSchema);

app.post("/add", async (req,res)=>{
    try{
        let myData = new User(req.body);
        await myData.save()
        res.send("Item saved to database");
    } catch(err){
        res.status(400).send("unable to save to database");
    }
});

app.get('/getdata',async(req,res) =>{

    try {
        let allData = await User.find();
        return res.json(allData)
    } catch (err) {
        console.log(err);
        return res.status(500).send("Server Error")
    }    

})


app.listen(5000, ()=>{
    console.log("Server is running on port 5000!");
})