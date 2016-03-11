angular.module('PostCtrl', [])
.controller('PostController', ['$scope', function($scope) {

  $scope.tagline = 'Bike Post Time!';

  // colors for dropdown
  $scope.colors = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'gray', 'orange', 'purple'];

  // new post object
  var post = {};

  this.formSubmit = function() {

    // get the values from the post form and add them to the post object
    post.title = $scope.title;
    post.description = $scope.description;
    post.color = $scope.color;
    post.price = $scope.price;

    // double check
    console.log('post object', post);

    // clear the form
    $scope.title = '';
    $scope.description = '';
    $scope.price = '';
  };



}]);