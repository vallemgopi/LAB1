const express = require("express");
const { getUsers, createUser, updateUser, deleteUser } = require("../controllers/userController");

const router = express.Router();

// Define Routes
router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;

