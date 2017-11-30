// when landing on the page, get all currencies and show them
function currenciesFactory($http) {
	var factory = {
		currencies: [ ],
	};

	factory.list = function() {
		$http.get('/api/currencies').success(function(ebrcts) {
			factory.ebrcts = ebrcts;
		}).error(function(data) {
			console.log('Error: ' + data);
		});
	}

	factory.get = function(callback) {
		$http.get('/api/currencies').success(function(currencies) { 
	        factory.currencies = currencies; 
	         
	        if (callback) { 
	          callback(currencies); 
	        } 
	 
	        return factory; 
	    }); 
	 
	    return factory; 
	}

	factory.create = function(name, value) {
		$http.post('/api/currencies', {name: name, value: value}).success(function(currency) {
			factory.currencies.push(currency);
		}).error(function(data) {
			console.log('Error: ' + data);
		});
	}

	factory.remove = function(currency, $index) {
		$http.delete('/api/currencies/' + currency._id).success(function(ebrct) {
			factory.currencies.splice($index, 1);
		}).error(function(data) {
			console.log('Error: ' + data);
		});
	};

	factory.list();

	return factory;
	
}

crypteeApp.factory('currenciesFactory', ['$http', currenciesFactory]);