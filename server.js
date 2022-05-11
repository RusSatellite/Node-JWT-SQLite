const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;
db.sequelize.sync().then(() => {
  Role.findAll().then(roles => {
    if (roles.length == 0) {
      Role.create({
        id: 1,
        name: "user"
      });

      Role.create({
        id: 2,
        name: "admin"
      });
    }
  });
}).catch((e) => console.log(e));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Node Test application." });
});

// routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});