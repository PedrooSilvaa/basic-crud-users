import express from 'express'
import cors from "cors"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express();
app.use(express.json())
app.use(cors())

app.post("/users", async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
        }
    })
    res.status(201).send(req.body) 
})

app.get("/users", async (req, res) => {

    let users = [];

    if(req.query){
        users = await prisma.user.findMany({
            where: { 
                name: req.query.name 
            }
        })
    }else{
        users = await prisma.user.findMany()
    }
    res.status(200).json(users)
})

app.put("/users/:id", async (req, res) => {
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name, 
            age: req.body.age,
        }
    })
    res.status(201).send(req.body) 
})

app.delete("/users/:id", async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json("User deleted")
})


app.listen(3000)