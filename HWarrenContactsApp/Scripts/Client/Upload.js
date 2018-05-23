$(document).ready(function() {
    $('#btnUploadFile').
    on('click', function() {
        var data = new FormData()
        var files = $("#fileUpload").get(0).files;
        // Add the uploaded image content to the form data collection
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
    });
});