const mongoose=require('mongoose');
const contactschema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    number:
    {
        type:String,
        require:true
    }
});
const contact=mongoose.model('contact',contactschema);
module.exports=contact;