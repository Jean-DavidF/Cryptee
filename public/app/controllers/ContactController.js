function ContactController($scope, $http, notificationService) {

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
	        	angular.element(document.getElementsByClassName('form-field')).val('');
	        	notificationService.push(notificationService.type.SUCCESS, "Le message a été correctement envoyé !", 5);
	        }).error(function(data, status, headers, config) {
	        	notificationService.push(notificationService.type.ERROR, "Le message n'a pas pu être envoyé.", 5);
        });
    };
}

crypteeApp.controller('ContactController', ['$scope', '$http', 'notificationService', ContactController]);