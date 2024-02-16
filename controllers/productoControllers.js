const Product = require("../models/producto");

let Products = [
    (new Product(1, "Cepillo", "Cepillo para el cabello", 10, 120.00)),
    (new Product(2, "Cepilante", "No se",15,30.00)),
    (new Product(3, "Cereal", "Cereal rico",20,30.00)),
    (new Product(4, "Gel", "Gel fijador para el cabello",25,30.00))
]

function getAllProducts (){
    return Products
}

function getSpecificProduct(id){
    console.log('Pero porque sho')
    return Products[id-1];
}

function orderDescByPrice(){
    let ProductsAsc = [];
    
    return ProductsAsc;
}

function createProduct(name,description,stock,price) {
    const newProduct = new Product (Products.length+1, name, description, stock, price);
    Products.push(newProduct)
    return newProduct;
}

function updateProduct(id, name, description, stock, price){
    Products.at(id-1).name = name;
    Products.at(id-1).description = description;
    Products.at(id-1).stock = stock;
    Products.at(id-1).price = price;
    return Products.at(id-1);
}

function killProduct(id) {
    Products.splice(id-1, 1);
    return Products;
}

function searchProductsByName(name) {
    const matchingProducts = Products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
    return matchingProducts;
}

function getInventoryValue(){
    var Value = 0;
    Products.forEach(function (P) {
        Value += P.price * P.stock;
    })
    return Value;
}

function getLessStock(stock){
    let productsLessStock = [];
    Products.forEach(function(P) {
        if(P.stock < stock){
            productsLessStock.push(P);
        }
    })
    return productsLessStock;
}

module.exports={
    getAllProducts,
    createProduct,
    getSpecificProduct,
    updateProduct,
    killProduct,
    searchProductsByName,
    orderDescByPrice,
    getInventoryValue,
    getLessStock
}