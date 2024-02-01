import jwt from 'jsonwebtoken'

const CreateJWTToken = (data, cb) => {
    try{
        var token = jwt.sign(JSON.stringify(data), process.env.JWTTOKENKEY);
        if(token){
            cb({created:true, message:"Token created", token:token});
        }else{
            cb({created:false, message:"Token create failed", token:null});
        }
    }catch(err){
        console.log("ERR : ", err);
    }
}

export default CreateJWTToken;