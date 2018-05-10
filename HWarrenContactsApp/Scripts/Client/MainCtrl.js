(function (app) {

//    var MainCtrl = function ($scope, $http) {
//  $scope.loading = true;
//  $http.post('/endpoint', { foo: 'bar' }).success(function(response) {
//    $scope.response = response;
//    $scope.loading = false;
//  });


//};


    var MainCtrl = function ($scope, $http) {
  $scope.loading = true;
  $http.post((contactsApiUrl, PhoneRecord)).success(function(response) {
    $scope.response = response;
    $scope.loading = false;
  });


};





    app.controller("MainCtrl", MainCtrl);
}(angular.module("contactsRouting")));