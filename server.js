const express = require("express");

const { syncDatabase } = require("./config/database"); //sync database

const employeeRoutes = require("./routes/employeeRoutes"); //
const deptEmpRoutes = require("./routes/deptEmpRoutes");
const departmentsRoutes = require("./routes/departmentsRoutes");
const deptManagerRoutes = require("./routes/deptManagerRoutes");
const salariesRoutes = require("./routes/salariesRoutes");
const titlesRoutes = require("./routes/titlesRoutes");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/employees", employeeRoutes);
app.use("/api/dept-emp", deptEmpRoutes);
app.use("/api/departments", departmentsRoutes);
app.use("/api/dept-manager", deptManagerRoutes);
app.use("/api/salaries", salariesRoutes);
app.use("/api/titles", titlesRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

syncDatabase()
  .then(() => {
    //server start
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing the database:", error);
  });
