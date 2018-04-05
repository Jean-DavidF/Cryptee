function Sidebar() {

	var directive = {
		restrict: 'E',
		templateUrl: 'app/templates/sidebar.html',
		controller: 'SidebarController'
	};

	return directive;
}

crypteeApp.directive('sidebar', Sidebar);
