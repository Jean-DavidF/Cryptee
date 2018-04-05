function FooterDashboard() {

	var directive = {
		restrict: 'E',
		templateUrl: 'app/templates/footer_dashboard.html',
		controller: 'FooterDashboardController'
	};

	return directive;
}

crypteeApp.directive('footerDashboard', FooterDashboard);
