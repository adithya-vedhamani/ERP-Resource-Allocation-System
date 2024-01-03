const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/project-routes");
const crouter = require("./routes/customer-routes");
const erouter = require("./routes/employee-routes");
const rrouter = require("./routes/role-routes");
const rerouter = require("./routes/resource-routes");
const lrouter = require("./routes/listing-routes");
const app = express();
const cors = require('cors');

// Middlewares  
app.use(express.json());
app.use(cors());
app.use("/projects", router);
app.use("/customers", crouter);
app.use("/employees", erouter);
app.use("/roles", rrouter);
app.use("/resources", rerouter);
app.use("/listings", lrouter);



mongoose
  .connect(
    "mongo_db_url"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

 