const express = require("express");
const {
  getNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../Controllers/notesController");
const authenticateUser = require("../Middleware/auth");
const noteRoute = express.Router();

noteRoute.get("/", authenticateUser, getNote);

noteRoute.post("/", authenticateUser, createNote);
noteRoute.put("/:id", authenticateUser, updateNote);
noteRoute.delete("/:id", authenticateUser, deleteNote);

module.exports = noteRoute;
