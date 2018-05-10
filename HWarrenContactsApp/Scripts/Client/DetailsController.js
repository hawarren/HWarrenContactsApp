(function (app) {

    //replace $http with my wrapper contactService
    var DetailsController = function ($scope, $routeParams, contactService) {
        var id = $routeParams.id;
        contactService
        .getById(id)
        .success(function (data) {
            $scope.PhoneRecord = data;
        });
        //uses copy of PhoneRecord so as not to have to undo changes if user cancels edit
        $scope.edit = function () {
            $scope.edit.PhoneRecord = angular.copy($scope.PhoneRecord);
        };

    };


    //var DetailsController = function ($scope, $http, $routeParams) {
    //    var id = $routeParams.id;
    //    $http.get("/api/PhoneRecord/" + id)
    //    .success(function (data) {
    //        $scope.PhoneRecord = data;
    //    });
    //};
    app.controller("DetailsController", DetailsController);
}(angular.module("contactsRouting")));