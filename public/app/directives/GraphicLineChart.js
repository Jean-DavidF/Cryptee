function graphicLineChart() {

	function linkFunction(scope, element, attr) {

		scope.options = {
			legend: {
				display: true,
				position: "bottom"
			}
		};
	}

	return {
		restrict: 'E',
		scope: {
			datas: '=',
			labels: '=',
			colors: '=',
			series: '=',
			options: '='
		},
		templateUrl: 'app/templates/graphic_line_chart.html',
		link: linkFunction
	}
}

crypteeApp.directive('graphicLineChart', [graphicLineChart]);
