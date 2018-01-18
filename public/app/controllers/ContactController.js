function ContactController($scope) {
	$scope.sendmail = function() {
        console.log('form submitted');
    };
}

crypteeApp.controller('ContactController', ['$scope', ContactController]);