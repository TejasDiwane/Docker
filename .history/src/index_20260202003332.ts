import express from "express"

const app=express();
app.use(express.json());


app.get("/",async (req,res)=>{
    const responec=await prisma.user.findmany();
    res.json(responec)
})  
app.post("/",async (req,res)=>{
    await prisma.user.create({
        data:{
            email:Math.random().toString(),
            password:Math.random().toString()
        }
    });
    res.json(responec)
})  
app.listen(3000,()=>{
    console.log(`Server is running on http://localhost:3000`)
})  