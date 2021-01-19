const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mailer = require('./nodemailer')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","OPTIONS,GET,POST,PUT,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");

    if (req.method==='OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

async function getDATA(message){
    return new Promise((resolve,res)=>{
        resolve( mailer(message))

    })
}

app.post('/SendOrder', (req, res) => {

    const information = req.body;
    // console.info('INFORMATION: ', information.data)
    const text = '';
    // console.log(information.length)
    



    const message = {
        from: 'CAYMAN-ZAKAZ <kaymantex68@yandex.ru>',
        to: "andrey.s.h.68@yandex.ru",
        subject: 'ZAKAZ SITE',
        //text: String(information.join("\n"))
        // text: String(information)
        text: req.body.join("\n")
    }

    getDATA(message).then(response=>console.log(response))

    res.send({message:"Order Send"})
    res.redirect('/cart')
})



app.listen(3001, () => console.log('server started on port 3001'))



