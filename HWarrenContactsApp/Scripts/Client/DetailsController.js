(function (app) {

    //replace $http with my wrapper movieService
    var DetailsController = function ($scope, $routeParams, movieService) {
        var id = $routeParams.id;
        movieService
        .getById(id)
        .success(function (data) {
            $scope.movie = data;
        });
        //uses copy of movie so as not to have to undo changes if user cancels edit
        $scope.edit = function () {
            $scope.edit.movie = angular.copy($scope.movie);
        };

    };


    //var DetailsController = function ($scope, $http, $routeParams) {
    //    var id = $routeParams.id;
    //    $http.get("/api/movie/" + id)
    //    .success(function (data) {
    //        $scope.movie = data;
    //    });
    //};
    app.controller("DetailsController", DetailsController);
}(angular.module("atTheMovies")));