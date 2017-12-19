// when landing on the page, get all currencies and show them
function currencyFactory($http, $location) {
	var factory = {
		currency: [ ],
	};

	factory.list = function(callback) {
		if (factory.currency.length != 0) {
			return callback ? callback(factory.currency) : null;
		}
	}

	factory.getCurrency = function(callback){
		var CurrencyId = $location.path();

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