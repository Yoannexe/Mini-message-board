require("dotenv").config()
const express = require("express")
const path = require("path")
const app = express()
const PORT = process.env.port || 3000
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
      },
      {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
      }
]

app.set("views" , path.join(__dirname , "views"))
app.set("view engine" , "ejs")

app.use(express.urlencoded({extended:true}))

app.get("/" , (req ,res) => {
    res.render("index" , {messages , title : "Mini Message Board"})
})

app.get("/new" , (req ,res) => {
    res.render("form")
})

app.post("/new" , (req , res) => {
    messages.push({text : req.body.message , user : req.body.author , added : new Date()})
    res.redirect("/")
})


app.listen(PORT , (req , res) => {
    console.log(`My Express server is running - on port ${PORT} `)
})