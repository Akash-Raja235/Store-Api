const errorHandlerMiddleware = async(err,req,res,next)=>{
    return res.status(500).json({mesg:"something wrong try again"})

}
module.exports = errorHandlerMiddleware;