const authorbook = require('../models/authorBook')
const authorInfo = require('../models/authorInfo')

const create_author_book = async function (req,res){
    let body = req.body
    let createdata = await authorbook.create(body)
    res.send({msg : createdata})
}


const ChetanBhagat = async function(req,res){
    let author = await authorInfo.find({author_name: "Chetan Bhagat"})
    let id = author[0].author_id
    let authorid = await authorbook.find({author_id:id})
    res.send({msg:authorid})
}

let findauthor = async function(req,res){
    let updatebook = await authorbook.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let id = updatebook.author_id
    let authorname = await authorInfo.find({author_id:id})
    res.send({msg:authorname}) 
    
}

let list = async function (req,res){
    let authorbooklist = await authorbook.find({price:{$gte:50,$lte:100}}).select({ author_id :true})
    let authorid =  authorbooklist.map(x=>x.author_id)
    let authorlist = await authorInfo.find({author_id:authorid}).select({author_name:true,_id:false})
    res.send({msg:authorlist})
   
    

    
}


module.exports.create_author_book = create_author_book
module.exports.ChetanBhagat = ChetanBhagat
module.exports.findauthor = findauthor
module.exports.list = list