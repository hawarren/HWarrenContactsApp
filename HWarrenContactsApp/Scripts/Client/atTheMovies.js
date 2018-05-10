(function () {
    var app = angular.module("atTheMovies", ["ngRoute"]);

    var config = function($routeProvider) {
        $routeProvider
            .when("/list",
                { templateUrl: "/scripts/client/views/list.html" })
            .when("/details/:id",
                { templateUrl: "/scripts/client/views/details.html" })
            .otherwise(
                { redirectTo: "/list" });
    };
    app.config(config);
    //defines certain routing info, specifically the prefix of the api
    app.constant("movieApiUrl", "/api/movie/");

}());