mongoose = require('mongoose');



module.exports.connect = function(callback){
    mongoose.connect(process.env.MONGODB_URI);
    var mongoDb = mongoose.connection;
    mongoDb.on("err", console.error.bind(console, "Connect error"));
    mongoDb.once("open", function(){
        console.log("Connected");
    });
};