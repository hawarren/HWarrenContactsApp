(function (app) {
    var EditController = function ($scope, contactService) {
        $scope.isEditable = function () {
            return $scope.edit && $scope.edit.PhoneRecord;
        };
        $scope.cancel = function () {
            $scope.edit.PhoneRecord = null;
        };
        $scope.save = function () {
            if ($scope.edit.PhoneRecord.Id) {
                updatePhoneRecord();
            } else {
                createPhoneRecord();
            }
        };
        var updatePhoneRecord = function () {
            contactService.update($scope.edit.PhoneRecord)
            .success(function () {
                angular.extend($scope.PhoneRecord, $scope.edit.PhoneRecord);
                $scope.edit.PhoneRecord = null;
            });
        };
        var createPhoneRecord = function () {
            contactService.create($scope.edit.PhoneRecord)
            .success(function (PhoneRecord) {
                $scope.PhoneRecords.push(PhoneRecord);
                $scope.edit.PhoneRecord = null;
            });
        };
    };
    app.controller("EditController", EditController);
}(angular.module("contactsRouting")));