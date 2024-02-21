const Product = require("../models/producto");

let Products = [
    (new Product(1, "Cepillo", "Cepillo para el cabello", 10, 120.00)),
    (new Product(2, "Cepilante", "No se",15,10.00)),
    (new Product(3, "Cereal", "Cereal rico",20,38.00)),
    (new Product(4, "Gel", "Gel fijador para el cabello",25,30.00))
]

let IDcount = Products.at(Products.length-1).id;

function getAllProducts (){
    return Products
}

function getSpecificProduct(id){
    len = Products.length;
    for(i = 0; i < len; i++){
        if(Products.at(i).id == id){
            return Products.at(i);
        }//if
    }//for
    return "No existe";
}

//ordena de mayor a menor
function orderDescByPrice(){
    let len = Products.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (Products[i].price < Products[i + 1].price) {
                let temp = Products[i];
                Products[i] = Products[i + 1];
                Products[i + 1] = temp;
                swapped = true;
            }//if
        }//for
    } while (swapped);
    return Products;
}

function createProduct(name,description,stock,price) {
    IDcount++;
    const newProduct = new Product (IDcount, name, description, stock, price);
    Products.push(newProduct)
    return newProduct;
}

function updateProduct(id, name, description, stock, price){
    len = Products.length;
    i = 0;
    for(; i < len; i++){
        if(Products.at(i).id == id){
            Products.at(i).name = name;
            Products.at(i).description = description;
            Products.at(i).stock = stock;
            Products.at(i).price = price;
        }//if
    }//for
    return Products.at(i);
}

function killProduct(id) {
    len = Products.length;
    for(i = 0; i < len; i++){
        if(Products.at(i).id == id){
            Products.splice(i, 1);
        }//if
    }//for
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

//Devuelve todos los articulos cuyo stock es menor al parametro recibido
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