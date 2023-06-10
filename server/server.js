const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to the database");
});

const usersRouter = require("./routes/users");
app.use("/api/users", usersRouter);

// User Model
const User = require("./models/User");

// Add test users
const createTestUsers = async () => {
  const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" },
    { username: "user4", password: "password4" },
    { username: "user5", password: "password5" },
  ];

  try {
    for (const user of users) {
      const existingUser = await User.findOne({ username: user.username });
      if (!existingUser) {
        const newUser = new User(user);
        await newUser.save();
        console.log(`Test user created: ${user.username}`);
      } else {
        console.log(`Test user already exists: ${user.username}`);
      }
    }
  } catch (error) {
    console.error("Error creating test users:", error);
  }
};

createTestUsers();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
