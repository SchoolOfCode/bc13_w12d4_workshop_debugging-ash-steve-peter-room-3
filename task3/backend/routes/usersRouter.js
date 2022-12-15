import express from "express";
import {
  addItem,
  getAllItems,
} from "../models/users.js";

const router = express.Router();

router.get("/", (req, res) => {
  const items = getAllItems()
  res.send(items);
});


router.post("/", (req, res) => {

  const newItem = addItem(req.body);
  res.send(newItem);
});


export default router;
