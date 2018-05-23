﻿(function (app) {
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
		$scope.confirmSave = function () {
			var txt;
			if (confirm("Are you sure you want to save?")) {
				//txt = "You pressed OK!";
				$scope.save();
			} else {
				txt = "You pressed Cancel!";
			}
			document.getElementById("hwDemo").innerHTML = txt;
		}
		$scope.confirmCancel = function () {
			if (confirm("Are you sure you want to cancel?")) {
				$scope.cancel();
			}
		}
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

		//this code from blogposts, remove since it doesn't also display the image right away
		var loadFile = function (event) {
			var reader = new FileReader();
			reader.onload = function () {
				var output = document.getElementById('output');
				output.src = reader.result;
				//$scope.PhoneRecord.MediaUrl
			};
			reader.readAsDataURL(event.target.files[0]);
		};
		//added from fiddle http://jsfiddle.net/hwarrendev/2cdn17uv/7/
			//removed from it's own controller, instead added to editcontroller
		//no need for array here
		//$scope.stepsModel = [];
				$scope.stepsModel = "";


		$scope.imageUpload = function(element) {
			var reader = new FileReader();
			reader.onload = $scope.imageIsLoaded;
			reader.readAsDataURL(element.files[0]);
			$scope.makeMediaUrl = function() {

				 $scope.MediaUrl = element.files[0].name;
				return $scope.MediaUrl
			}

		};

	}

	$scope.imageIsLoaded = function(e){
		$scope.$apply(function () {
			//since it's not an array, no .push needed
			//$scope.stepsModel.push(e.target.result);
			$scope.stepsModel = e.target.result;
			//$scope.PhoneRecord.


		});
	}






	};


	app.controller("EditController", EditController);
}(angular.module("contactsRouting")));