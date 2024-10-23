const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({}));

let isAtDoor = false;

app.get("/", (req, res, next) => {
  if (isAtDoor) {
    res.json({ status: isAtDoor });
    setTimeout(() => {
      isAtDoor = false;
    }, 5000);
  }
});

app.get("/ring", (req, res) => {
  isAtDoor = true;
  res.send("OK");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
