module.exports = class Producto {
    constructor (id,name, description, stock, price){
        this.id = id;
        this.name = name;
        this.description = description;
        this.stock = stock;
        this.price = price;
    }
}