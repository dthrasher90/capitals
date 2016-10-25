

var App = angular.module('capitalsApp', []);

App.controller('capitalsCtrl',['$scope', '$http', function($scope, $http) {



$scope.search=function(){
    $http ({
      method:  'GET',
      url: ' http://api.geonames.org/countryInfoJSON?&username=dthrasher90'
    })
          .success(function (data){
            console.log(data.geonames[0].countryName,
               data.geonames[0].population,
               data.geonames[0].capital,
               data.geonames[0].areaInSqKm);

           $scope.country = data.geonames[0].countryName;
           $scope.code = data.geonames[0].countryCode;
           $scope.population= data.geonames[0].population;
           $scope.capital=  data.geonames[0].capital;
           $scope.area= data.geonames[0].areaInSqKm;

           $scope.countryArray=data.geonames;


            console.log(data.geonames[0]);
});
};
}])
