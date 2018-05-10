(function (app) {
    //originally used $http method directly, but now uses the movieService wrapper, which is a wrapper around $http)

    var ListController = function ($scope, movieService) {
        movieService
        .getAll()
        .success(function (data) {
            $scope.movies = data;
        });

        //var ListController = function ($scope, $http) {
        //    $http.get("api/movie")
        //    .success(function (data) {
        //        $scope.movies = data;
        //    });

        //this deletes the movie from the server
        $scope.delete = function (movie) {
            movieService.delete(movie)
            .success(function () {
                removeMovieById(movie.Id);
            });
        };
        //this removes movie from the array on the client
        var removeMovieById = function (id) {
            for (var i = 0; i < $scope.movies.length; i++) {
                if ($scope.movies[i].Id == id) {
                    $scope.movies.splice(i, 1);
                    break;
                }
            }
        };

        $scope.create = function () {
            $scope.edit = {
                movie: {
                    Title: "",
                    Runtime: 0,
                    ReleaseYear: new Date().getFullYear()
                }
            };
        };


    };
    app.controller("ListController", ListController);
}(angular.module("atTheMovies")));