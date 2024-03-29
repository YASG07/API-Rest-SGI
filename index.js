const express = require("express");
const bodyParser = require("body-parser");
const Productsroutes = require("./routes/productRoutes");
const Usersroutes = require("./routes/userRoutes");
const tokenUtilities = require("./middleware/utilitiesMiddleware");
const userDriver = require("./controllers/userController");


const app = express();
app.use (bodyParser.json());

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(userDriver.login(username, password)){
        const token = tokenUtilities.generateToken({id: 1, username: username});
        res.json(token);
    } else {
        res.status(401).json({error: "Unauthorized"});
    }
})

app.get("/", (req, res) => {
    res.json({ Message: `listening on port ${PORT}`});
})

app.use("/user", Usersroutes);
app.use("/product",Productsroutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutado ${PORT}`)
});
