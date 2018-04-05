function NotificationService($http, $timeout, $compile) {
	var template = null;
	var pinPoint = angular.element(document.getElementById("notificationPinPoint"));

	$http.get("app/templates/notification.html").success(function(response) {
		template = 
		'<div class="notification"><div class="notification-icon"></div><div class="notification-text"></div></div>'
	});

	function notificationDelay(element, delay) {
		setTimeout(function() {
			angular.element(element).remove();
		}, delay * 1000);
	}

	function pushNotification(type, message, delay) {
		var notificationNode = angular.element(template)[0];
		var angularElement = angular.element(notificationNode);
		var notificationChildren = angularElement.children();

		angularElement.addClass(type);
		angularElement.bind("click", function($event) {
			notificationNode.style.transform = "translate(500px, 0)";
			$timeout(function() {
				angularElement.remove();
			}, 300);
		});

		$('.notification-text', notificationNode).each(function(key, value) {
			angular.element(value).text(message);
		});

		$('.notification-icon', notificationNode).each(function(key, value) {
			var children = angular.element(value);
			switch (type) {
				case "notification-info":
					children.append("<i class='fa fa-info-circle'></i>");
					break;
				case "notification-warning":
					children.append("<i class='fa fa-exclamation-triangle'></i>");
					break;
				case "notification-success":
					children.append("<i class='fa fa-check'></i>");
					break;
				case "notification-error":
					children.append("<i class='fa fa-times'></i>");
					break;
			}
		});

		$compile(notificationNode);
		pinPoint.prepend(notificationNode);

		$timeout(function() {
			if (notificationNode) {
				notificationNode.style.transform = "translate(0, 0)";
			}
		});

		if (delay > 0) {
			notificationDelay(notificationNode, delay);
		}
	}

	return {
		type: {
			INFO: "notification-info",
			WARNING: "notification-warning",
			SUCCESS: "notification-success",
			ERROR: "notification-error"
		},
		push: pushNotification
	};
}

crypteeApp.service('notificationService', ['$http', '$timeout', '$compile', NotificationService]);