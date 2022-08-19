const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//2BdQfL846Dx6yaRG
//mongodb+srv://pawanrajput:<password>@atlascluster.xodascp.mongodb.net/test
mongoose.connect("mongodb+srv://pawanrajput:2BdQfL846Dx6yaRG@atlascluster.xodascp.mongodb.net/test", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
