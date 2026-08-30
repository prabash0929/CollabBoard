const mongoose = require("mongoose");


const taskSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    description:{
        type:String
    },


    status:{
        type:String,
        enum:[
            "todo",
            "doing",
            "done"
        ],
        default:"todo"
    },


    boardId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Board",
        required:true
    },


    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },


    version:{
        type:Number,
        default:1
    }


},{
    timestamps:true
});


module.exports = mongoose.model("Task",taskSchema);