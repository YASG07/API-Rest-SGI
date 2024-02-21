const express = require ("express");
const router = express.Router();
const Product = require("../controllers/productoControllers");
const Token = require('../middleware/authenticateMiddleware');

router.get('/', Token, (req,res)=>{
    res.json(Product.getAllProducts())
});

router.get('/order', Token, (req, res) => {
    res.json(Product.orderDescByPrice());
})

router.get('/value', Token, (req, res) => {
    res.json({ message: `Inventory is valued at $${Product.getInventoryValue()} MXN`});
})

router.get('/:id', Token,(req,res) => {
    const {id} = req.params;
    res.json(Product.getSpecificProduct(id));
})

router.post('/', Token, (req,res) => {
    const {name, description, stock, price} = req.body;
    const newProduct = Product.createProduct(name, description, stock, price);
    res.status(201).json(newProduct);
})

router.put('/:id', Token, (req, res) => {
    const {id} = req.params;
    const {name, description, stock, price} = req.body;
    const updateProduct = Product.updateProduct(id, name, description, stock, price);
    res.status(202).json(updateProduct);
})

router.delete('/:id', Token, (req,res) => {
    try{
        const {id} = req.params;
        res.status(202).json(Product.killProduct(id));
    } catch (error){
        res.status(202).json({ Message: "Element deleted succesfully"});
    }
})

router.get('/search/:name', Token, (req, res) => {
    const { name } = req.params;
    const products = Product.searchProductsByName(name);
    res.json(products);
})

router.get('/lessthan/:stock', Token, (req, res) => {
    const {stock} = req.params;
    res.json(Product.getLessStock(stock));
})

module.exports = router;