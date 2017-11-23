function NavbarTop() {

	var directive = {
		restrict: 'E',
		templateUrl: 'app/templates/navbar_top.html',
		controller: 'NavbarTopController'
	};

	return directive;
}

crypteeApp.directive('navbarTop', NavbarTop);