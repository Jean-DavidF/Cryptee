var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const config = require('../../config.js');

var transport = nodemailer.createTransport({
    service: config.EMAIL_SERVICE,
    auth: {
        user: config.EMAIL_ADDRESS,
        pass: config.EMAIL_PASSWORD
    }
});

module.exports = function(app) {

    app.post('/contact-form', function(req, res) {
        var data = req.body;

        transport.sendMail({
            from: data.contactFirstName + ' ' + data.contactLastName + ' <' + data.contactEmail + '>',
            to: 'cryptee.app@gmail.com',
            subject: data.contactFirstName + ' ' + data.contactLastName + ' <' + data.contactEmail + '>' + ' Objet : ' + data.contactSubject,
            text: data.contactMsg
        });

        res.json(data);
    });
};