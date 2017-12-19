function currencyFactory($http, $location) {
	var factory = {
		currency: [ ],
	};

	factory.list = function(callback) {
		if (factory.currency.length != 0) {
			return callback ? callback(factory.currency) : null;
		}
	}

	// Récupère les datas d'une cryptomonnaie
	factory.getCurrency = function(callback){
		var CurrencyId = $location.path().replace('/dashboard','');

	    $http.get('https://api.coinmarketcap.com/v1/ticker' + CurrencyId + '/').success(function(currency) {
	    	factory.currency = currency;

	    	if (callback) {
	    		callback(currency);
	    	}

	    	return factory;
	    });

	    return factory;
	}


	return factory;
}

crypteeApp.factory('currencyFactory', ['$http', '$location' , currencyFactory]);