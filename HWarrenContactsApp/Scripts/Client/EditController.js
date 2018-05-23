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
			    $scope.ImageNameIs = $scope.stepsModel;
			} else {
			    createPhoneRecord();
            			    $scope.ImageNameIs = $scope.stepsModel;

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

		$scope.imageUpload = function (element) {
			var reader = new FileReader();
			reader.onload = $scope.imageIsLoaded;
			reader.readAsDataURL(element.files[0]);
		    $scope.resultImage = reader.result.name;

			//upload image as soon as it's picked
			var data = new FormData();
			var files = element.files;
			if (files.length > 0) {
			data.append("UploadedImage", files[0]);
			}
			//Ajax request with the contentType = false, and processDate = false
		var ajaxRequest = $.ajax({
			type: "POST",
			//make sure this uri is correct
			url: "http://localhost:51072/api/FileUploads",
			contentType: false,
			processData: false,
			data: data
		});
		    //sample filename select
		$scope.getname = function () {
     var fullPath = document.getElementById("img1").src;
     //var filename = fullPath.replace(/^.*[\\\/]/, '');
     // or, try this,
      var filename = fullPath.split("/").pop();

    document.getElementById("result").value = filename;
 }

            //end of sample filename select


		};

		$scope.imageIsLoaded = function (event) {
			$scope.$apply(function () {
				//since it's not an array, no .push needed
				//$scope.stepsModel.push(e.target.result);
			    $scope.stepsModel = event.target.result;
			    $scope.ImageNameIs = event.target.result.name;


			});
		};



	};
	app.controller("EditController", EditController);
}(angular.module("contactsRouting")));