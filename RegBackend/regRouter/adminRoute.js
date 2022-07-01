const express = require("express");
const router = express.Router();

const {
  getseps,
  getsep,
  addsep,
  editsep,
  deletesep,
} = require("../controllers/cepController");

// Get all seps
router.get("/", getseps);

// Get a single sep
router.get("/:id", getsep);

// Create a sep
router.post("/create", addsep);

// Update a sep
router.put("/update/:id", editsep);

// Deleting a sep
router.delete("/:id", deletesep);

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
    getegistarars,
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
