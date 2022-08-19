
const authorinfo = require('../models/authorInfo')

const authordetails = async function(req,res){
    let body = req.body
    let auhtorbody = await authorinfo.create(body)
    res.send({msg : auhtorbody})
}

module.exports.authordetails = authordetails