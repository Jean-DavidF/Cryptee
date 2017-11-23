// load the currency model
var Currency = require('../../models/currency');

// expose the routes to our app with module.exports
module.exports = function(app) {

    // api ---------------------------------------------------------------------
    // get all currencies
    app.get('/api/currencies', function(req, res) {

        // use mongoose to get all currencies in the database
        Currency.find(function(err, currencies) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(currencies); // return all currencies in JSON format
        });
    });

    // create currency and send back all currencies after creation
    app.post('/api/currencies', function(req, res) {

        // create a currency, information comes from AJAX request from Angular
        Currency.create({
            name : req.body.name,
            value : req.body.value
        }, function(err, currency) {
            if (err)
                res.send(err);

            // get and return all the currencies after you create another
            Currency.find(function(err, currencies) {
                if (err)
                    res.send(err)
                res.json(currencies);
            });
        });

    });

    // delete a currency
    app.delete('/api/currencies/:currency_id', function(req, res) {
        Currency.remove({
            _id : req.params.currency_id
        }, function(err, currency) {
            if (err)
                res.send(err);

            // get and return all the currencies after you create another
            Currency.find(function(err, currencies) {
                if (err)
                    res.send(err)
                res.json(currencies);
            });
        });
    });
};