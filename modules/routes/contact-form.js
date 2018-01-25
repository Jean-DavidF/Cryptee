var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const constants = require('../utils/constants.js');
var transport = nodemailer.createTransport({
    service: constants.EMAIL_SERVICE,
    auth: {
        user: constants.EMAIL_ADDRESS,
        pass: constants.EMAIL_PASSWORD
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