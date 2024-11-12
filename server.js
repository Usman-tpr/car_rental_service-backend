// src/server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")
dotenv.config();

const connectDB = require("./src/config/dbConfig");
const carRoutes = require("./routes/carRoutes");
const userRoutes = require("./routes/userRoutes")
const bookingRoutes = require("./routes/bookingRoutes")

const app = express();
app.use(cors())
app.use(express.json());
app.use("/uploads", express.static("uploads"));


// Database Connection
connectDB(); 

// Routes
app.use("/api/cars", carRoutes);
app.use("/api/user" , userRoutes)
app.use("/api/booking" , bookingRoutes)

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ success: false, message: err.message || "Server Error" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
