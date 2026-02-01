import express from "express"
import {prisma} from "./lib/prisma"
const app=express();
app.use(express.json());


app.get("/",async (req,res)=>{
    const responec=await prisma.user.findMany();
    res.json(responec)
})  
app.post("/",async (req,res)=>{
    await prisma.user.create({
        data:{
            email:Math.random().toString(),
            passwor:Math.random().toString()
        }
    });
   
})  
app.listen(3000,()=>{
    console.log(`Server is running on http://localhost:3000`)
})  