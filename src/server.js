require("dotenv").config();
const express = require("express");
const SQLconnection = require("./db/connection");
const User = require("./db/models/userModel");
const userRouter = require("./routes/userRoutes");
const app = express();
const cors= require("cors")
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 5001;

app.get("/health",(req,res) => res.status(200).send("API is healthy"));

app.use(userRouter);

User.sync({alter:true});

app.listen(port, () => console.log(`Server is listening on port ${port}`));