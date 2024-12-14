const express = require('express');
const routes = express.Router();

const customers = require('./customers');
const booking = require('./booking');
const table = require('./table');
const staffRole = require('./staffRole');
const staff = require('./staff');
const order = require('./order');
const orderMenuItem = require('./orderMenuItem');
const ingredientType = require('./ingredientType');
const ingredient = require('./ingredient');
const menu = require('./menu');
const menuItem = require('./menuItem');
const menuItemIngredient = require('./menuItemIngredient');

routes.use('/customers', customers);
routes.use('/booking', booking);
routes.use('/table', table);
routes.use('/staffRole', staffRole);
routes.use('/staff', staff);
routes.use('/order', order);
routes.use('/orderMenuItem', orderMenuItem);
routes.use('/ingredientType', ingredientType);
routes.use('/ingredient', ingredient);
routes.use('/menu', menu);
routes.use('/menuItem', menuItem);
routes.use('/menuItemIngredient', menuItemIngredient);

module.exports = routes;