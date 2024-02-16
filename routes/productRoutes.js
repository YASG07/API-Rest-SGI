const express = require ("express");
const router = express.Router();
const Product = require("../controllers/productoControllers");

router.get('/',(req,res)=>{
    res.json(Product.getAllProducts())
});

router.get('/order', (req, res) => {
    res.json(Product.orderDescByPrice());
})

router.get('/value', (req, res) => {
    res.json({ message: `Inventory is valued at $${Product.getInventoryValue()} MXN`});
})

router.get('/:id', (req,res) => {
    const {id} = req.params;
    res.json(Product.getSpecificProduct(id));
})

router.post('/', (req,res) => {
    const {name, description, stock, price} = req.body;
    const newProduct = Product.createProduct(name, description, stock, price);
    res.status(201).json(newProduct);
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {name, description, stock, price} = req.body;
    const updateProduct = Product.updateProduct(id, name, description, stock, price);
    res.status(202).json(updateProduct);
})

router.delete('/:id', (req,res) => {
    const {id} = req.params;
    res.status(202).json(Product.killProduct(id));
})

router.get('/search/:name', (req, res) => {
    const { name } = req.params;
    const products = Product.searchProductsByName(name);
    res.json(products);
})

router.get('/lessthan/:stock', (req, res) => {
    const {stock} = req.params;
    res.json(Product.getLessStock(stock));
})

module.exports = router;