var myApp=angular.module("requestModule",['authModule']);

myApp.factory("requestHandler",['$http','authFactory',function($http,authFactory){
    
    var requestObj={};

    requestObj.getRequest=function(requestURL,params,isAuthenticated){

        if(isAuthenticated==1)
        {
                requestURL=requestURL+"?access_token="+authFactory.getUserObj().access_token;
        }

         $http.get(requestURL,params).then(function (results) {
            console.log(results);       
         });
    };

    requestObj.postRequest=function(requestURL,params,isAuthenticated){      
        return null;
    };


   

    return requestObj;

}]);
