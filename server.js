// server.js
// where your node app starts

// init project

var express = require("express");
var app = express();
const port = 3000
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
/*var cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204*/

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/timestamp", (req, res) => {
  const date = new Date();
  res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

app.get("/api/timestamp/:date", (req, res) => {
  
  let { date } = req.params;
  
  if (date.split("-").length == 1) {
    date = parseInt(date);
  } else {
    date = date;
  }
  date = new Date(date);
  if (date == "Invalid Date") {
    res.json({ error: "Invalid Date" });
  } else {
    date = date;
  }

  res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

// listen for requests :)
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
