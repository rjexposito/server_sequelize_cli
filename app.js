const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/gateway.routes")(app);
require("./routes/peripherical.routes")(app);
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

const db = require("./models");


const Role = db.role;

 db.sequelize.sync();
// drop the table if it already exists
 db.sequelize.sync({ force: true }).then(() => {
   console.log("Drop and re-sync db.");
   initial();
 });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a la APiRest." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });  
}