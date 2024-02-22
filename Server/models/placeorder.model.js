import mongoose from "mongoose";
import order_dishes from './orders.model.js';
var orderSchema = mongoose.Schema({

    dishes :[order_dishes.schema],

    pay_amt : {
        required : true,
        type : Number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    },
    gst_amt : {
        required : true,  
        type : Number
    },
    total_amt : {
        required : true,
        type : Number
    },
    transaction_id : {
        required : true,
        type : String
    },
    table_no : {
        required : true,
        type : Number
    },
})

export default mongoose.model('orderSchema',orderSchema,'placeorder');
