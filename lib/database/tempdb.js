  
  const mongoose = require('mongoose');  
  const TempDb = new mongoose.Schema({
    id: { type: String,  unique: true ,required: true, default:"ᴇꜱ ᴛᴇᴀᴍꜱ-ᴛᴇᴄʜ👑"},
    creator: { type: String, default: "Asta" },
    data: { type: Object, default: {} }
  });  
  const dbtemp = mongoose.model("dbtemp", TempDb)
  module.exports = { dbtemp }
  