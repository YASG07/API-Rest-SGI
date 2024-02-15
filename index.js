const express = require("express");
const bodyParser = require("body-parser");
const Productsroutes = require ("./routes/productRoutes");

const app = express();
app.use (bodyParser.json());


app.use("/product",Productsroutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutado ${PORT}`)
});
