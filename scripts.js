    var app= angular.module("searchApp",['ngMaterial']);
    app.controller("searchCtrl",function($scope,$http){
        $scope.searchText="";
        $scope.item = "";
        $scope.searchItem= function(){
            var url = "http://api.shortlyst.com/v1/products?index=0&limit=10&q="+$scope.searchText+"&mode=lite&apikey=e3ebd9fdf9704775c7fd6bb4f20e1798";
            $http.get(url).then(function(response){
                $scope.item= response.data;
            })
        };
    });

    app.controller("productView",function($scope,$http){
        $scope.searchText="";
        $scope.indexNo=0;
        $scope.item = "";
        $scope.merchantFilter = null;
        if($scope.FlipkartFilter){
            $scope.merchantFilter = "flipkart"
        }
        $scope.searchItem= function(){
            var url = "http://api.shortlyst.com/v1/products?index=0&limit=1&q="+$scope.searchText+"&merchantFilter="+$scope.merchantFilter+"&mode=lite&apikey=e3ebd9fdf9704775c7fd6bb4f20e1798";
            $http.get(url).then(function(response){
                $scope.item= response.data;
                console.log(response.data);
            })
        };
    });

