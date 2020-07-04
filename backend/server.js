const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const userSchema = require("../backend/userSchema")


require("dotenv/config")


const PORT = 3000
app.use(bodyParser.json())


mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION, () => console.log("Mongoose Connected\n"))


app.get("/", (req, res) => {
  res.send("This is a get request along /");
})



//POST new user - CREATE
app.post("/create", async (req, res) => {
  const newUser = new userSchema({
    name: req.body.name,
    workouts: req.body.workouts
  })
  try {
    const savedUser = await newUser.save()
    console.log("\nSaved User! ")
  } catch (err) {
    console.log(err)
  }

})


//GET SPECIFIC person - READ
app.get("/:name", (req, res) => {
  constuserSchema.findOne({ name: req.params.name }, (err, res) => {
    console.log(res)
  })
})

//update based on name - UPDATE
app.put("/:name", (req, res) => {
  userSchema.findOneAndUpdate({ name: req.params.name }, { workouts: req.body.workouts }, (err, res) => {
    console.log("\nUpdated!")
  })
})

//Delete based on name - DELETE
app.delete("/:name", (req, res) => {
  userSchema.findOneAndDelete({ name: req.params.name }, (err, res) => {
    console.log(`\nUser ${req.params.name} has been deleted!`)
  })
})



app.listen(PORT, () => {
  console.log("\n\nServer up and running on Port: " + PORT)
})