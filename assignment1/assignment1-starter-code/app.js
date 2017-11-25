(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', DietController)

  DietController.$inject = ['$scope'];
  function DietController($scope) {
    $scope.textInput = "";
    $scope.message = "";

    $scope.respond = function () {
      var foodItems = [];
      if($scope.textInput === "") {
        $scope.message = "Please enter data first";
        return;
      }
      foodItems = $scope.textInput.split(",");
      if(foodItems.length < 4) $scope.message = "Enjoy!";
      else $scope.message = "Too much!";
    }
  }
})();
