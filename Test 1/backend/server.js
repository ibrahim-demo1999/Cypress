// backend/server.js
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure file upload storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Serve static files
app.use(express.static(path.join(__dirname, "../frontend")));

// API Endpoints
// Login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Basic validation for testing
  if (!username || !password) {
    return res.status(400).json({ error: "Missing credentials" });
  }
  res.json({
    success: true,
    message: "Login successful",
    user: { username },
  });
});

// Double click tracking endpoint
app.post("/doubleclick", (req, res) => {
  const { element } = req.body;
  console.log(`Double clicked on ${element}`);
  res.json({ success: true, message: "Double click tracked" });
});

// Right click tracking endpoint
app.post("/rightclick", (req, res) => {
  const { element } = req.body;
  console.log(`Right clicked on ${element}`);
  res.json({ success: true, message: "Right click tracked" });
});

// Scroll tracking endpoint
app.post("/scroll", (req, res) => {
  const { position } = req.body;
  console.log(`Scrolled to ${position}`);
  res.json({ success: true, message: "Scroll position tracked" });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
