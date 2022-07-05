const express = require("express");
const router = express.Router();

const {
  getceps,
  getcep,
  addcep,
  editcep,
  deletecep,
} = require("../controllers/cepController");

// Get all seps
router.get("/", getceps);

// Get a single sep
router.get("/:id", getcep);

// Create a sep
router.post("/create", addcep);

// Update a sep
router.put("/update/:id", editcep);

// Deleting a sep
router.delete("/:id", deletecep);

// finance route

const {
    getfinance,
    getfinance,
    addfinance,
    editfinance,
    deletefinance,
  } = require("../controllers/financeController");
  
  // Get all finances
  router.get("/", getfinances);
  
  // Get a single finance
  router.get("/:id", getfinance);
  
  // Create a finance
  router.post("/create", addfinance);
  
  // Update a finance
  router.put("/update/:id", editfinance);
  
  // Deleting a finance
  router.delete("/:id", deletefinance);

//registarar route
const {
    getregistarars,
    getregistarar,
    addregistarar,
    editregistarar,
    deleteregistarar,
  } = require("../controllers/registararController");
  
  // Get all registarars
  router.get("/", getregistarars);
  
  // Get a single registarar
  router.get("/:id", getregistarar);
  
  // Create a registarar
  router.post("/create", addregistarar);
  
  // Update a registarar
  router.put("/update/:id", editregistarar);
  
  // Deleting a registarar
  router.delete("/:id", deleteregistarar);

module.exports = router;
