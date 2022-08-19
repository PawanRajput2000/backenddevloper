const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const Bookcollection = require("../controllers/bookcollection")
const authorbook = require('../controllers/authorbook')
const authorinfo = require('../controllers/authorinfo');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/CreatebookCollection", Bookcollection.bookdetail)

router.get("/Getbookcollection",Bookcollection.getbookdetail1)

router.post("/GetBooksInYear",Bookcollection.GetBooksInYear)

router.get("/getParticularBooks",Bookcollection.getParticularBooks)


router.get("/getXINRBooks",Bookcollection.getXINRBooks)

router.get("/getRandomBooks",Bookcollection.getRandomBooks)

//author books  // Assignment 3
router.post("/createauthorbook",authorbook.create_author_book)

router.post("/createauthorinfo",authorinfo.authordetails)


router.get("/ChetanBhagat",authorbook.ChetanBhagat)

router.get('/findauthorandupdate',authorbook.findauthor)


router.get('/listofbook',authorbook.list)

module.exports = router;