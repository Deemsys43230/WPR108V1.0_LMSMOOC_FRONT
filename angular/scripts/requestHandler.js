var myApp=angular.module("requestModule",['authModule']);

myApp.factory("requestHandler",['$http','authFactory',function($http,authFactory){
    
    var requestObj={};

    requestObj.getRequest=function(requestURL,params,isAuthenticated){

        if(isAuthenticated==1)
        {
                requestURL="http://localhost:8080/Learnterest/"+requestURL+"?access_token="+authFactory.getUserObj().access_token;
        }
        else{
             requestURL="http://localhost:8080/Learnterest/"+requestURL;
        }

         $http.get(requestURL,params).then(function (results) {
            console.log(results);       
         });
    };

    requestObj.postRequest=function(requestURL,params,isAuthenticated){      
       if(isAuthenticated==1)
        {
                requestURL="http://localhost:8080/Learnterest/"+requestURL+"?access_token="+authFactory.getUserObj().access_token;
        }
        else{
             requestURL="http://localhost:8080/Learnterest/"+requestURL;
        }
        return $http.post(requestURL,params).then(function (results) {
                return results;
         });
    };

    return requestObj;

}]);
