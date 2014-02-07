/**
 * Created by sfeir on 29/01/14.
 */
"user strict";
myApp.factory('AppService', ['$http', function ($http) {
    var API_URI_DATA = 'data/package.json';
    return {
        fetch: function () {
            return $http.get(API_URI_DATA);
        }
    };
}]);

