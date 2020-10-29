const contact=require("../models/schema");

module.exports.home=function(req,res){
    contact.find({},function(err,fetchdata){
       if(err)
       {
           console.log('eeeeeeeeee')
           return;
       }
       return res.render('home',{
     contact:fetchdata
       });
   });
    
};

module.exports.create=function(req,res){
    contact.create({
    name:req.body.name,
    number:req.body.number
},function(err,newcontact){
    if(err){
        console.log('errrrr');
        return;
    }
    return res.redirect('back');
});

};
module.exports.delete=function(req,res){
    console.log(req.body.items);
    contact.findByIdAndDelete(req.body.items,function(err)
    {
        if(err)
        {
            console.log(errrr);
            return;
        }

    });
    return res.redirect('back');
    
}