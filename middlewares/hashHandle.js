import bcrypt from "bcrypt"

const Bcrypt = () => {
    const saltRounds = 10; 
    const convertHash =  (req, res, next) => {
        try{
            const data = req?.body;
            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(data?.password, salt, function(err, hash) {
                    req.hashValue = hash;
                    next();
                });
            });
        }catch(err){
    next(err);
        }
    }
    const compairHash = (data, cb, next) => {
        const {password, hashPassword} = data;
        console.log(password, hashPassword);
        try{
           bcrypt.compare(password, hashPassword, function(err, result) {
            const response ={
                veryfied:result||false,
                message:result?"password verified":"password verification failed"
            }
                cb(response)
            });
        }catch(err){
            console.log(err);
        }
    }

    return {
        convertHash,
        compairHash
    }
}

export default Bcrypt();
