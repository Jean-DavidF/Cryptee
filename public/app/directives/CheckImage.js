function CheckImage() {
	var directive = {
			link: function(scope, element, attrs) {
	      element.bind('error', function(response) {
	        if (attrs.src != attrs.checkImage) {
	          attrs.$set('src', attrs.checkImage);
	        }
	      });
	    }
		}

	return directive;
}

crypteeApp.directive('checkImage', CheckImage);
