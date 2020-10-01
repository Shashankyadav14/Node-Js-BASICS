const express = require("express");
const path = require("path");
const app = express();

//const members = require("./Members");
const moment = require("moment");
const logger = require("./middleware/logger");

// init middleware
// app.use(logger);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set static folder
app.use(express.static(path.join(__dirname, "test")));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "test", "hello.html"));
//   //res.send("<h1>Hello</h1>");
// });

// members api routes
app.use("/api/members", require("./routes/api/members"));

const port = process.env.port || 9090;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
