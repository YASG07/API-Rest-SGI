const express = require ("express");
const router = express.Router();
const Urs = require("../controllers/userController");//Info de los métodos en userController.js

//EndPoint get /user manda llamar listUsers
router.get('/', (req, res) => {
    res.json(Urs.listUsers());
})

//EndPoint post /user manda llamar createUser
router.post('/', (req, res) => {
    const {username, password} = req.body;
    const newUser = Urs.createUser(username, password);
    res.status(201).json(newUser);
})

//EndPoint put /user manda llamar updateUser
router.put('/:username', (req, res) => {
    const {username} = req.params
    const {password} = req.body
    const updatedUser = Urs.updateUser(username, password);
    res.status(202).json(updatedUser);
})

//EndPoint delete /user manda llamar killUser
router.delete('/:username', (req, res) => {
    const {username} = req.params;
    const killedUser = Urs.killUser(username);
    res.status(202).json(killedUser);
})

//Exporta las ruta dentro del router
module.exports = router;