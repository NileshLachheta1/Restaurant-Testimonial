import mongoose from "mongoose";

var disheslistSchema = mongoose.Schema({
    dish_name :{
        type: String,
        required: true,
    },
    pricing: [
        {
          variant: {
            type: String,
            required: true,
            enum: ["Half","Full","None"],
          },
          price: {
            type: Number,
            required: true,
          },
        },
      ],
    available :{
        type: Boolean,
        required: true,
    },
    category :{
        type: String,
        required: true,
        enum:["veg","non-veg"]
    },
    type :{
        type: String,
        required: true,
        enum : ["sweet","desert",]
    }
});

export default mongoose.model("disheslistSchema",disheslistSchema,"disheslist");