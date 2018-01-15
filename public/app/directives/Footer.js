function Footer() {

	var directive = {
		restrict: 'E',
		templateUrl: 'app/templates/footer.html',
		controller: 'FooterController'
	};

	return directive;
}

crypteeApp.directive('footer', Footer);