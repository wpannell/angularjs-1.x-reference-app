var servicesBaseUrl = 'http://' + window.location.hostname+ ':8080/';
var updateBaseUrl = function () {
	if(window.location.port == '9999')
		servicesBaseUrl = 'http://' + window.location.hostname+ ':9998/';
	else if(window.location.port == '9099')
		servicesBaseUrl = 'http://' + window.location.hostname+ ':9098/';
	else if(window.location.hostname == 'tap-web.apps-q01.pcfqafmc.ford.com')
		servicesBaseUrl = 'http://tap-services.apps-q01.pcfqafmc.ford.com/';
}();

//servicesBaseUrl = 'http://ahivas03676.ahi.ford.com:9998/';
 
var locationId = '001';
var franchiseAgreement = 'L01';

var GOEApp = angular.module('GOEApp', ['ui.router', 'ngMaterial', 'kendo.directives']);

var GOECtrl = GOEApp.controller('GOECtrl',
		['$rootScope', '$scope', '$http', '$cacheFactory', '$mdDialog', '$state', '$stateParams', '$templateCache',
			function ($rootScope, $scope, $http, $cacheFactory, $mdDialog, $state, $stateParams, $templateCache) {
				$rootScope.userLoggedIn = false;
				$rootScope.getHTTP = function(service, successCallBack, errorCallBack) {
					$http({
						url: servicesBaseUrl + service,
						type: 'application/json'
						})
						.success(function (data) {
							successCallBack(data);
						})
						.error(function (data) {
							errorCallBack(data);
						});
				};

				$rootScope.postHTTP = function(service, requestBody, successCallBack, errorCallBack) {
					$http({
						url: servicesBaseUrl + service,
						data: requestBody,
						method: 'POST',
						type: 'application/json',
					}).success(function (data) {
						successCallBack(data);
					}).error(function (data) {
						errorCallBack(data);
					});
				};

				$rootScope.$on('$stateChangeSuccess',
					function(event, toState, toParams, fromState, fromParams){
						if(fromState.name == 'ordersContainer' || fromState.name == 'inventory')
							$rootScope.fromState = fromState.name;
					});

				$scope.showUpdates = function () {
					$mdDialog
						.show({
							templateUrl: './controllers/goeCtrl/goeUpdates.html',
							controller: 'GoeUpdatesCtrl',
							clickOutsideToClose: true
						});
				};

				$scope.goHome = function () {
					$state.go('home');
				}

				var startUpApp = function () {
					var httpCache = $cacheFactory.get('$http');
					if (httpCache != null)
						httpCache.removeAll();

					var templates = $cacheFactory.get('templates');
					if (templates != null)
						templates.removeAll();

					$templateCache.removeAll();
				};

				startUpApp();

			}
		]);

GOEApp.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
	
	$stateProvider
		.state('login', {
			controller: 'LoginCtrl',
			templateUrl: './controllers/loginCtrl/Login.html' + '?' + Date.now(),
			url: '/'
		})
		.state('home', {
			controller: 'LandingPageCtrl',
			templateUrl: './controllers/landingPageCtrl/LandingPage.html' + '?' + Date.now(),
			url: '/home'
		})
		.state('browse', {
			controller: 'BrowseCtrl',
			templateUrl: './controllers/browseCtrl/Browse.html' + '?' + Date.now(),
			url: '/ordersContainer'
		})
		.state('locate', {
			controller: 'LocateCtrl',
			templateUrl: './controllers/locateCtrl/Locate.html' + '?' + Date.now(),
			url: '/locate'
		})
		.state('inventory', {
			controller: 'InventoryCtrl',
			templateUrl: './controllers/inventoryCtrl/Inventory.html' + '?' + Date.now(),
			url: '/inventory'
		})
		.state('saleAndContract', {
			controller: 'ContractCtrl',
			templateUrl: './controllers/saleAndContractCtrl/saleAndContract.html' + '?' + Date.now(),
			url: '/contract',
			params: { 'type': null }
		})
		.state('build', {
			controller: 'BuildCtrl',
			templateUrl: './controllers/buildCtrl/Build.html' + '?' + Date.now(),
			url: '/build',
			params: { 'type': null }
		})
	;
	
	$urlRouterProvider.otherwise('/');

	$mdThemingProvider.theme('default')
		.primaryPalette('grey')
		.accentPalette('purple');
	
});

var GoeUpdatesCtrl = GOEApp.controller('GoeUpdatesCtrl',
	['$rootScope', '$scope', '$mdDialog',
		function ($rootScope, $scope, $mdDialog) {

			$scope.close = function() {
				$mdDialog.hide();
			};

		}
	]);

var setImageUrl = function (vlCode) {
    switch (vlCode) {
        case "CC9":
            return './artifacts/redMKZ.png';
        case "TME":
            return './artifacts/whiteMKC.png';
        case "CD9":
            return './artifacts/blueMKX.png';
        case "TB5":
            return './artifacts/whiteNavigator.png';
        default:
            return null;
    }
}

String.prototype.format = function()
{
	var content = this;
	for (var i=0; i < arguments.length; i++)
	{
		var replacement = '{' + i + '}';
		content = content.replace(replacement, arguments[i]);
	}
	return content;
};
