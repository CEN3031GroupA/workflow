// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.newItem = "";

// create editBtn array to mirror toDo list,
// holds boolean values depending on whether item has been clicked on
  $scope.editBtn = {};
// for loop initializes each item in editBtn to false
  for (var i=0, length = $scope.todos.length; i < length; i++) {
    $scope.editBtn[i] = false;
  }
// edit function makes editBtn entry true
  $scope.edit = function(index){
    $scope.editBtn[index] = true;
  }
// update function closes out editBtn functionality
  $scope.update = function(index){
    $scope.editBtn[index] = false;
  }

  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
    }
  }

  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }


});

/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 *
 * *********************/
