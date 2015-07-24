var requestHandlerApp=angular.module("requestModule",[]);

requestHandlerApp.factory("requestHandler",['$http',function($http){
    
    var requestObj={};

    //*IMPORTANT*//
    var hostedDomain="http://localhost/Learnterest";

    requestObj.getRequest=function(requestURL,params){

        requestURL=hostedDomain+requestURL;
    
         return $http.get(requestURL,params).then(function (results) {
            console.log(results);    
            alert(JSON.stringify(results));
            alert(results.data.userRole)
            return results;   
         });
    };

    requestObj.postRequest=function(requestURL,params){      
         
         requestURL=hostedDomain+requestURL;
    
         return $http.post(requestURL,params).then(function (results) {
            console.log(results);
             alert(JSON.stringify(results));
            return results;   
         });
    };

    return requestObj;

}]);
