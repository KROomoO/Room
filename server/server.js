const express = require("express");
const app = express();
const cors = require("cors");

// Router
const socialAuth = require("./router/socialAuth");

// HTTP PORT
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/auth", socialAuth);

app.listen(port, () => {
    console.log(`Server Running on PORT : ${port}`);
});
