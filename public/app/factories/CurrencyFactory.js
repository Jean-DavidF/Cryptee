function currencyFactory($http, $location, $state) {
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

	    $http.get('https://api.cryptee.fr/getdata' + CurrencyId).success(function(currency) {
	    	factory.currency = currency;

				if (factory.currency.length == 0) {
					$state.go('error');
				}

	    	if (callback) {
	    		callback(currency);
	    	}

	    	return factory;
	    });

	    return factory;
	}

	// Récupère les charts d'une crypto monnaie
	factory.getCharts = function (callback) {
		var CurrencyId = $location.path().replace('/dashboard','');

		$http.get('https://api.cryptee.fr/getCharts' + CurrencyId).success(function(currencies) {
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

crypteeApp.factory('currencyFactory', ['$http', '$location', '$state', currencyFactory]);
