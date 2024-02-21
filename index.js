const express = require("express");
const bodyParser = require("body-parser");
const Productsroutes = require("./routes/productRoutes");
const tokenUtilities = require("./middleware/utilitiesMiddleware");

const app = express();
app.use (bodyParser.json());

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(username === 'admin' && password === 'admin'){
        const token = tokenUtilities.generateToken({id: 1, username: username});
        res.json(token);
    } else {
        res.status(401).json({error: "Unauthorized"});
    }
})

app.get("/", (req, res) => {
    res.json({ Message: `listening on port ${PORT}`});
})

app.use("/product",Productsroutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutado ${PORT}`)
});
