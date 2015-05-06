var app = angular.module("PlayerApp", []);

app.controller("teamCtrl", function($scope, $http) {

	// var players = ['David De Gea', 'Wayne Rooney']

    // $scope.players = players

    // full_name
    // http://api.thescore.com/epl/teams/62/players?rpp=-1

    $http.get("http://api.thescore.com/epl/teams/62/players?rpp=-1").success(function(response) {

		$scope.players = response;

   	});

});

