const express = require("express");
const { catform, saveCatdata, deleteCatdata, editCatData } = require("../Controller/CategoryController");
const router = express.Router();
const { ObjectId } = require("mongodb");
const main = require("../models/dbconfig");

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Routes
router.get("/", catform);
router.post("/savecat", urlencodedParser, saveCatdata);
router.get("/deleteCatData/:i", deleteCatdata); 
router.get("/editCatData/:i", editCatData); 
module.exports = router;
