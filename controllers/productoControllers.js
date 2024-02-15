const Product = require("../models/producto");

let Products = [
    (new Product(1, "Cepillo", "Cepillo para el cabello", 10, 120.00)),
    (new Product(2, "Cepilante", "No se",20,30.00)),
    (new Product(2, "Cereal", "Cereal rico",20,30.00)),
    (new Product(2, "Gel", "Gel fijador para el cabello",20,30.00))
]

function getAllProducts (){
    return Products
}

function getSpecificProduct(id){
    return Products[id-1];
}

function orderAscByPrice(){
    let ProductsAsc = [];
    Products.forEach(function (P) {
        var mayor = P.price;
        if(mayor >= P.price){
            ProductsAsc.push(P);
        }
    })
    return ProductsAsc;
}

function createProduct(name,description,stock,price) {
    const newProduct = new Product (Products.length+1, name, description, stock, price);
    Products.push(newProduct)
    return newProduct
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

module.exports={
    getAllProducts,
    createProduct,
    getSpecificProduct,
    updateProduct,
    killProduct,
    searchProductsByName,
    orderAscByPrice
}