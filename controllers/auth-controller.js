const user = require("../db/models/user");
const signUp=async(req,res,next)=>{
    
//     console.log(req.body, "req",user);
//   const newUSer = await user.create(req.body);
//     console.log(newUSer);
    res.json({
        status:200,
        message:'signup success'
    })
}

module.exports = {signUp}