const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const roomRoutes = require("./routes/roomRoutes.js");
const bookingRoutes = require("./routes/bookingRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const { errorHandler } = require("./middleware/errorHandler.js");
const cookieParser = require("cookie-parser");
const { auth } = require("./middleware/authMiddleware.js");

const port = process.env.PORT || 5000;

//connecting database
connectDB();

//setup middleware
app.use(express.json());
app.use(cookieParser());

//setup necessary routes
app.use("/auth", auth);
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`listening on port ${port}`));