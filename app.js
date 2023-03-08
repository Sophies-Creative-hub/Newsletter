
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const request = require('request')

app.use(express.static("public"));
// in public Ordner ein Ordner images + css mit Bild und Css-Datei
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res)=>{

    res.sendFile(__dirname+'/signup.html')
})

app.post('/', (req, res)=> {
    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let email = req.body.email;
    console.log(req.body);
    res.send()
})


app.listen(3000,() =>{
    console.log('LISTENING ON PORT 3000')
})