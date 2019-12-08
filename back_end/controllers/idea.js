


exports.getidea=(req,res,next)=>{
    const full_name=req.body.full_name;
// gona us JWT than add the idea 
    res.json({
        message:'get idea',
        done:'true' 
                });
};

exports.postidea=(req,res,next)=>{
    const full_name=req.body.full_name;
// gona us JWT than add the idea 
    console.log(req.body);
    res.json({
        message:'POST idea',
        done:'done succesfully'
    })
//******************* */

};

exports.updateidea=(req,res,next)=>{
    const name_idea=req.body.name_idea;
    //update from db
    res.json({
        message:'update idea',
        done:'true' 
                });
};


exports.deleteidea=(req,res,next)=>{
    //update from db

    res.json({
        message:'delete idea',

        done:'true' 
                });
};