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
			'/api/currencies' : 'https://api.cryptee.fr/getalldata'
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

	// Récupère les dix premières crypto-monnaies
	// factory.getTenFirst = function (callback) {
	// 	var mapping = {
	// 		'/api/currencies' : 'https://api.cryptee.fr/getalldata'
	// 	}
	//
	// 	$http.get(mapping['/api/currencies']).success(function(currencies) {
	// 			factory.currencies = currencies;
	// 			var array = [ ];
	// 			for (var i = 0; i <= 9; i++) {
	// 				array.push(factory.currencies[i]);
	// 			}
	//
	// 			factory.currencies = array;
	//
	// 	    if (callback) {
	// 	    	callback(array);
	// 	    }
	// 	    return factory;
	// 	});
	//
	// 	return factory;
	// }

	// Récupère l'ensemble des cryptos monnaies
	factory.getTwoFirst = function (callback) {
		var mapping = {
			'/api/currencies' : 'https://api.cryptee.fr/getalldata'
		}

		$http.get(mapping['/api/currencies']).success(function(currencies) {
			factory.currencies = currencies;
			var array = [ ];
			for (var i = 0; i <= 1; i++) {
				array.push(factory.currencies[i]);
			}

			factory.currencies = array;

	    if (callback) {
	    	callback(array);
	    }
	    return factory;
		});

		return factory;
	}

	return factory;
}

crypteeApp.factory('currenciesFactory', ['$http', currenciesFactory]);
