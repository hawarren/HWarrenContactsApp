(function(app) {
    var EditController = function($scope, contactService) {
        $scope.isEditable = function() {
            return $scope.edit && $scope.edit.PhoneRecord;
        };
        $scope.cancel = function() {
            $scope.edit.PhoneRecord = null;
        };
        $scope.save = function() {
            if ($scope.edit.PhoneRecord.Id) {
                updatePhoneRecord();
            } else {
                createPhoneRecord();
            }
        };
        $scope.confirmSave = function() {
            var txt;
            if (confirm("Are you sure you want to save?")) {
                //txt = "You pressed OK!";
                $scope.save();
            } else {
                txt = "You pressed Cancel!";
            }
            document.getElementById("hwDemo").innerHTML = txt;
        }
        $scope.confirmCancel = function() {
            if (confirm("Are you sure you want to cancel?")) {
                $scope.cancel();
            }
        }
        var updatePhoneRecord = function() {
            contactService.update($scope.edit.PhoneRecord)
                .success(function() {
                    angular.extend($scope.PhoneRecord, $scope.edit.PhoneRecord);
                    $scope.edit.PhoneRecord = null;
                });
        };
        var createPhoneRecord = function() {
            contactService.create($scope.edit.PhoneRecord)
                .success(function(PhoneRecord) {
                    $scope.PhoneRecords.push(PhoneRecord);
                    $scope.edit.PhoneRecord = null;
                });
        };

        //added from fiddle http://jsfiddle.net/hwarrendev/2cdn17uv/7/





};


	app.controller("EditController", EditController);
}(angular.module("contactsRouting")));