const express = require("express");
const lrouter = express.Router();
const Listing = require("../model/Listing");
const listingsController = require("../controllers/listings-controller");

lrouter.get("/", listingsController.getAllListings);
lrouter.get("/", listingsController.getListingById);

module.exports = lrouter;

