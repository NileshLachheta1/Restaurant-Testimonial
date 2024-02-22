import { request, response } from "express";
import contactModel from "../models/contactus.model.js";
import disheslist from "../models/disheslist.model.js";
import placeorder from "../models/placeorder.model.js";

export const contactUsForm = async(request,response)=>{
    try {
        console.log("data : ",request.body)
        var data =  await contactModel.create(request.body);
        // response.json({status : "success"})
        console.log("=============> ",data)

    } catch (error) {
        console.log("Error in contact Form",error);
    }
 }


export const disheslistController = async(request,response)=>{
    try {
        console.log("-------> ",request.body);
        var dishlist = await disheslist.create(request.body);
        console.log("Successfully Inserted ",disheslist)
    } catch (error) {
        console.log("Error While in dishes list controller",error);
    }
}

export const orderController = async (request,response) => {
    try {
        console.log(" ******* ",request.body);
        var result = await placeorder.create(request.body);
        console.log('result ',result); 
    } catch (error) {
        console.log("Error while in place order controller",error);
    }
}