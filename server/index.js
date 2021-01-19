const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mailer = require('./nodemailer')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use('/SendOrder', createProxyMiddleware({
//     target: 'http://localhost:3001/SendOrder', //original url
//     changeOrigin: true,
//     //secure: false,
//     onProxyRes: function (proxyRes, req, res) {
//         proxyRes.headers['Access-Control-Allow-Origin'] = '*';
//     }
// }));
app.use(cors())

app.post('/SendOrder', (req, res) => {

    const information = req.body;
    console.info('INFORMATION: ', information)
    const text = '';
    // console.log(information.length)
    res.redirect('/cart')



    const message = {
        from: 'CAYMAN-ZAKAZ <kaymantex68@yandex.ru>',
        to: "andrey.s.h.68@yandex.ru",
        subject: 'ZAKAZ SITE',
        //text: String(information.join("\n"))
        // text: String(information)
        text: 'dfhdf'
    }

    mailer(message)
})



app.listen(3001, () => console.log('server started on port 3001'))



