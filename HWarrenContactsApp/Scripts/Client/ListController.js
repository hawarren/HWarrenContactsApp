(function (app) {
    //originally used $http method directly, but now uses the contactService wrapper, which is a wrapper around $http)

    var ListController = function ($scope, contactService) {
        contactService
        .getAll()
        .success(function (data) {
            $scope.PhoneRecords = data;
        });

        //var ListController = function ($scope, $http) {
        //    $http.get("api/PhoneRecord")
        //    .success(function (data) {
        //        $scope.PhoneRecords = data;
        //    });

        //this deletes the PhoneRecord from the server
        $scope.delete = function (PhoneRecord) {
            contactService.delete(PhoneRecord)
            .success(function () {
                removePhoneRecordById(PhoneRecord.Id);
            });
        };
        //this removes PhoneRecord from the array on the client
        var removePhoneRecordById = function (id) {
            for (var i = 0; i < $scope.PhoneRecords.length; i++) {
                if ($scope.PhoneRecords[i].Id == id) {
                    $scope.PhoneRecords.splice(i, 1);
                    break;
                }
            }
        };

        $scope.create = function () {
            $scope.edit = {
                PhoneRecord: {
                    FirstName: "",
                    Phone: 0,
                    Birthdate: ""
                }
            };
        };


    };
    app.controller("ListController", ListController);
}(angular.module("contactsRouting")));