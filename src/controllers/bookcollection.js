const bookDetails = require("../models/bookModel")

const  createBook = async function(req,res) {
    let book = req.body
    let savedData = await bookDetails.create(book)
    res.send({msg : savedData})
}


const bookList = async function(req,res) {
    
    let savedData1 = await bookDetails.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg:savedData1})
}

const  GetBooksInYear = async function(req,res){
    let year1 = req.query.year// 2021
    let InYear = await bookDetails.find({year : {$eq : year1}})
    res.send({msg:InYear})
}

const getParticularBooks = async function(req,res){
    let name = req.body.bookName
    let year2 = req.body.year
    let particularBook= await bookDetails.find({ $or :[{bookName:name},{year:year2}]})
    res.send({msg: particularBook})
}

// this is not giving correct output
const getXINRBooks = async function(req,res){
    let bookprice = await bookDetails.find({"prices.indianPrice":{$in:["100","200","500"]}})
    //let bookprice = await bookDetails.find({$or:[{prices.indianPrice:"100"}]})
    res.send({msg:bookprice})
}
 

const getRandomBooks = async function(req,res){
    let randomBooks = await bookDetails.find({$or :[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send({msg:randomBooks})
}
module.exports.bookdetail = createBook
module.exports.getbookdetail1 = bookList
module.exports.GetBooksInYear = GetBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks =getRandomBooks