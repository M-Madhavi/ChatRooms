const mongoose = require('mongoose');
const chatroomSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:"name of chatroom is required"
        },
    }
    
);
module.exports = mongoose.model("Chatroom",chatroomSchema)