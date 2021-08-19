const nodemailer = require('nodemailer');
const config = require('./config');

const transport = nodemailer.createTransport({
    service:config.service,
    auth: {
        user:config.email,
        pass:config.password
    }
})

module.exports =  (req, res) => {
    const user = req.body;
    var mailOptions = {
        from: config.email,
        to: user.email,
        subject:'Your Message Was Received',
        text: 'Dear '+ user.name + ',' +'\n'+'\t'+'Your message has been received and we will get back to you shortly.'
    }
    
    transport.sendMail(mailOptions,(err, info) => {
        if(err) console.log(err);
        else console.log('Email Sent ' + info.response);
    })
}