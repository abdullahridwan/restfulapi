const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv/config")


const PORT = 3000

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION, () => console.log("Mongoose Connected\n"))


app.get("/", (req, res) => {
  res.send("This is a get request along /");
})

app.post("/create", (req, res) => {
  res.send("This is a post ");
})
app.put("/update", (req, res) => {
  res.send("This is a put");
})
app.delete("/delete", (req, res) => {
  res.send("This is a delete");
})

app.listen(PORT, () => {
  console.log("\n\nServer up and running on Port: " + PORT)
})