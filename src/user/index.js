const express = require('express');
const router = express.Router();
const middlewares = require('./middlewares/validate');
const controller = require('./controllers/index');




// Lay tat ca user trong db
router.get('/user',controller.getAllUsers) 

// tim kiem user
router.get('/user/find',controller.findUserByName)

// Them user
router.post('/user', middlewares.validateUser,middlewares.capitalizeName, controller.addUser )

router.delete('/user/:id', controller.deleteByID)

router.put('/user/:id', controller.UpdateByID)

module.exports = router;