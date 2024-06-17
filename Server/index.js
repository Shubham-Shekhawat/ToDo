const express=require('express')
const mongoose=require("mongoose")
const cors=require("cors")
const model=require('./models/user')

const app=express()
app.use(cors())
app.use(express.json())

app.get("/", async (req,res)=>{
    await model.find({})
    .then(result => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})

app.get("/getuser/:id",(req,res)=>{
    const id=req.params.id;
    model.findById({_id:id})
    .then(result => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})

app.put("/update/:id",async (req,res)=>{
    const id = req.params.id;
    const {name,email,age}=req.body;
    await model.findByIdAndUpdate({_id:id},{name,email,age})
    .then(result => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})

app.delete("/delete/:id",async (req,res)=>{
    const id=req.params.id;
    await model.findByIdAndDelete({_id:id})
    .then(result => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})

mongoose.connect("mongodb://127.0.0.1:27017/Userwithyousuf")

app.post("/create", async (req,res)=>{
    let {name,email,age}=req.body;
    await model.create({name,email,age})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
    });
    
})

app.listen(3000,()=>{
    console.log("Listenning on 3000")
})