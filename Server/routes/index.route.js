import express from "express";
import {contactUsForm , disheslistController,orderController} from '../controllers/index.controller.js';
var Router = express.Router();

Router.post("/contact",contactUsForm);
Router.get("/disheslist",disheslistController);
Router.post('/placeorder',orderController);
export default Router;