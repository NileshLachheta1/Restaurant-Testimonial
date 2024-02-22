import mongoose from "mongoose";

var orderDishesSchema = mongoose.Schema({
    dish_name : {
        required : true,
        type:String
    },
    varient : {
        required : true,
        type : String, 
        enum: ["Half","Full","None"],
    },
    quantity : {
        required  : true,
        type : Number
    },
    price_per_qty : {
        required: true,
        type : Number
    }
})

export default mongoose.model('orderDishesSchema',orderDishesSchema,'orderdish');
