// when landing on the page, get all currencies and show them
function currenciesFactory($http) {
	var factory = {
		currencies: [ ],
	};

	factory.list = function(callback) {
		if (factory.currencies.length != 0) {
			return callback ? callback(factory.currencies) : null;
		}
	}

	// Récupère l'ensemble des cryptos monnaies
	factory.getCurrencies = function (callback) {
		var mapping = {
			'/api/currencies' : 'https://min-api.cryptocompare.com/data/all/coinlist'
		}

		$http.get(mapping['/api/currencies']).success(function(currencies) {
		    factory.currencies = currencies;
		    
		    if (callback) {
		    	callback(currencies);
		    }
		    return factory;
		});

		return factory;
	}

	return factory;
}

crypteeApp.factory('currenciesFactory', ['$http', currenciesFactory]);