var loginForm = angular.module('loginForm', []);

function mainController($scope, $http){
	$scope.formData = {};

	$scope.verificacao = function(){
		$scope.$watch('formData', function(){
			console.log($scope.formData);
		});
		/*
		$http.post('/api/validacao', $scope.formData)
		.sucess(function(data){
			$scope.formData = {} // Limpa o form
			console.log(data);
		})
		.error(function(data){
			console.log('Error: '+ data);
		});
		*/
	}
}