
    angular.module("dskblog").factory("Categories", ["$resource", function($resource){

        return $resource("/api/category/:id", {id: '@id'});

    }]);

