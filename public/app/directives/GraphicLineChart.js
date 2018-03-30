function graphicLineChart() {

	function linkFunction(scope, element, attr) {

		scope.options = {
			legend: {
				display: true,
				position: "bottom"
			},
			scales: {
      	xAxes: [{
        	gridLines: {
          	display: false
          }
        }],
        yAxes: [{
          gridLines: {
          	display: true
          }
        }]
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
