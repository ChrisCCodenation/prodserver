// Setup end points.
const {Router} = require("express");
const registerUser = require("../controllers/registerUser");
const hashPassword = require("../middleware/hashedPassword");
const listUsers = require("../controllers/listUser");
const checkPassword = require("../middleware/checkPassword");
const login = require("../controllers/loginUser");
const checkToken= require("../middleware/checkToken")
const deleteUser= require("../controllers/deleteUser")
// const updatePassword= require("../controllers/")

const userRouter = Router();
 
userRouter.post("/users/register", hashPassword, registerUser);
userRouter.get("/users/listUsers", checkToken, listUsers);
userRouter.delete("/users/deleteUser", checkToken, deleteUser);
// userRouter.put("/users/updatePassword", checkToken, updatePassword);
userRouter.post("/users/login", checkPassword, login)



module.exports = userRouter;