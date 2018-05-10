(function (app) {
    var contactService = function ($http, contactsApiUrl) {
        var getAll = function () {
            return $http.get(contactsApiUrl);
        };
        var getById = function (id) {
            return $http.get(contactsApiUrl + id);
        };
        var update = function (PhoneRecord) {
            return $http.put(contactsApiUrl + PhoneRecord.Id, PhoneRecord);
        };
        var create = function (PhoneRecord) {
            return $http.post(contactsApiUrl, PhoneRecord);
        };
        var destroy = function (PhoneRecord) {
            return $http.delete(contactsApiUrl + PhoneRecord.Id);
        };
        return {
            getAll: getAll,
            getById: getById,
            update: update,
            create: create,
            delete: destroy
        };
    };
    app.factory("contactService", contactService);
}(angular.module("contactsRouting")))
//This service makes it easier to use the $http method by wrapping it.
//cleaned up1