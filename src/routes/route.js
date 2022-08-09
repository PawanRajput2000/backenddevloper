const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get ('/movies',function(req,res){
       let movies = ["don","3 idiot", "veer", "loc" ]
       res.send(movies)
})

router.get('/movies/:indexNumber',function(req,res){
    const movie = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    
    let index =req.params.indexNumber;
    res.send(movie[index])
})

router.get('/movies/:indexNumber',function(req,res){
    const movie = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let index =req.params.indexNumber;
    if(index>movie.length){
        
        res.send("please enetr the valid index number")
    }

    let a = movie[index]
    console.log(a)
})

router.get('/films',function(req,res){
   let film = [ {"id": 1,"name": "The Shining"}, {"id": 2,"name": "Incendies"}, {"id": 3,"name": "Rang de Basanti"}, {
    "id": 4,"name": "Finding Nemo" }]
   res.send( film)
})


router.get('/films/:filmId',function(req,res){
    let film = [ {"id": 1,"name": "The Shining"}, {"id": 2,"name": "Incendies"}, {"id": 3,"name": "Rang de Basanti"}, {
        "id": 4,"name": "Finding Nemo" }]
    let film1 = req.params.filmId
    if (film1  > film.length){
        res.send("please enter the valid id")
    }else{
        res.send(film[film1])
    }
    
})




router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    res.send(studentName)
})
/*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */


    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    //console.log("This is the request "+ JSON.stringify(requestParams))
    
    //console.log('Name of the student is ', studentName)

module.exports = router;