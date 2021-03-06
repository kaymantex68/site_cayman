const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mailer = require('./nodemailer')
const path = require('path')
const { createProxyMiddleware } = require('http-proxy-middleware');


const app = express()

app.use('/', express.static(path.join(__dirname,'client','public')))
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','public','index.html'))
})
app.use(cors())
// app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "OPTIONS,GET,POST,PUT,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// app.use(createProxyMiddleware("/SendOrder", {
//     target: "http://localhost:3001",
//     changeOrigin: false
// }));

/**---------------------------------------------------------------------------- */


app.post('/SendOrder', (req, res) => {

    const information = req.body;
    console.info('INFORMATION: ', information.data)
    const text = '';
    const message = {
        from: 'CAYMAN-ZAKAZ <kaymantex68@yandex.ru>',
        to: "andrey.s.h.68@yandex.ru",
        subject: 'ZAKAZ SITE',
        text: req.body.join("\n")
    }
    res.send({...req.body,message:"ok"})
    mailer(message);
    return(res)
})



app.listen(3001, () => console.log('server started on port 3001'))



