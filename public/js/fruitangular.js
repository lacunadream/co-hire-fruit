
var FruitsApp = angular.module('fruitsApp', []);
//Data loading controller calling API
FruitsApp.controller('ListFruitsController', ['$scope', '$http', '$location', function($scope, $http, $location) {

    var fruitType = window.location.href.match(/search\/(.*)/)


    //For star rendering
    $scope.getNumber = function(num) {
        return new Array(num);   
    }

    //For showing and hiding data
    $scope.hideFunction = function(objId) {
        console.log(objId)

        var button = document.getElementById(objId);
        var ratings = document.getElementsByClassName(objId);

        if (ratings[0].style.display != "none") {
            button.innerHTML = '<span>show more </span><span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>'
            for (i = 0; i< ratings.length;i++) {
                ratings[i].style.display = "none"
            }        
        } else {
            button.innerHTML = '<span>show less </span><span class="glyphicon glyphicon-menu-up" aria-hidden="true"></span>'
            for (i = 0; i< ratings.length;i++) {
                ratings[i].style.display = "block"
            }  

        }

        
    }

    $http({
        method: "GET",
        url: "/api/getfruits/" + fruitType[1]
    }).then(function succes(response) {
        $scope.records = response.data;
        $scope.numberOfFruits = response.data.length

    console.log($scope.records)
    }, function error(response) {
        $scope.no_records_found = "No Fruits Found";
    });
}]);
