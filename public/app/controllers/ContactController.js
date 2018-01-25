function ContactController($scope, $http) {

	var data = [];

	$scope.sendMail = function() {

		var data = ({
			contactFirstName : $scope.contactFirstName,
			contactLastName : $scope.contactLastName,
			contactSubject : $scope.contactSubject,
			contactEmail : $scope.contactEmail,
			contactMsg : $scope.contactMsg
		});

        $http.post('/contact-form', data)
	        .success(function(data, status, headers, config) {
	        	console.log('success!');
	        }).error(function(data, status, headers, config) {
	        	console.log('error!');
        });
    };
}

crypteeApp.controller('ContactController', ['$scope', '$http', ContactController]);