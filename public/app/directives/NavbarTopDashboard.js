function NavbarTopDashboard() {

	var directive = {
		restrict: 'E',
		templateUrl: 'app/templates/navbar_top_dashboard.html',
		controller: 'NavbarTopDashboardController'
	};

	return directive;
}

crypteeApp.directive('navbarTopDashboard', NavbarTopDashboard);
