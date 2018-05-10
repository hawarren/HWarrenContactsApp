(function (app) {

    var MainCtrl = function ($scope, $http) {
  $scope.loading = true;
  $http.post('/endpoint', { foo: 'bar' }).success(function(response) {
    $scope.response = response;
    $scope.loading = false;
  });

        $http.post((contactsApiUrl, PhoneRecord)).success(function(response) {
    $scope.response = response;
    $scope.loading = false;
  });

        (contactsApiUrl, PhoneRecord)
};







    app.controller("MainCtrl", MainCtrl);
}(angular.module("contactsRouting")));