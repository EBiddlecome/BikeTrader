angular.module('PostCtrl', [])
.controller('PostController', ['$scope', '$timeout', 'PostAd', function($scope, $timeout, PostAd) {

  $scope.tagline = 'Bike Post Time!';

  // colors for dropdown
  $scope.colors = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'gray', 'orange', 'purple'];

  // new post object
  post = {};

  this.formSubmit = function() {
    // get the values from the post form and add them to the post object
    post.title = $scope.title;
    post.description = $scope.description;
    post.color = $scope.color;
    post.price = $scope.price;
    post.email = $scope.email;
    post.picFile = $scope.picFile || 'https://media.giphy.com/media/YFxJ7u3FdCrdK/giphy.gif';
    post.dateCreated = Date.now();
    

    console.log('form submit called', post);
    /*  console.log('$scope.picFile ********************', $scope.picFile.toString());
    post.picFile = $base64.encode($scope.picFile);
    */
    // clear the form
    $scope.title = '';
    $scope.description = '';
    $scope.color = '';
    $scope.price = '';
    $scope.email = '';
    PostAd.postAd(post);
  };

  // // upload pics
  // $scope.uploadPic = function(file) {
  //   console.log('upload attempt begun', file);
  //   Upload.upload({
  //     url: '/api/post',
  //     method: 'POST',
  //     data: file
  //   })

  //   .then(function (response) {
  //     $timeout(function () {
  //       file.result = response.data;
  //     });
  //   }, function (response) {
  //     if (response.status > 0) {
  //       $scope.errorMsg = response.status + ': ' + response.data;
  //     }
  //   }, function (evt) {
  //     // Math.min is to fix IE which reports 200% sometimes
  //     file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
  //   });
  // };



}]);