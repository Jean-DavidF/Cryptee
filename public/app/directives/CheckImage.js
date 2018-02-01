function CheckImage($http) {
	var directive = {
		restrict: 'A',
		link: function(scope, element, attrs) {
			attrs.$observe('ngSrc', function (ngSrc) {
				$http.get(ngSrc).success(function() {
					console.log('img ok');
				}).error(function() {
					console.log('img not ok');
					// Mettre image par defaut
					// element.attr('src', )
				})
			});
		}
	};

	return directive;
}

crypteeApp.directive(['checkImage', '$http', CheckImage]);