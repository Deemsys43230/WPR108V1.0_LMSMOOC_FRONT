var requestHandlerApp=angular.module("requestModule",[]);

requestHandlerApp.factory("requestHandler",['$http',function($http){
    
    var requestObj={};

    //*IMPORTANT*//
    var hostedDomain="http://localhost:8080/Learnterest/";

    requestObj.getRequest=function(requestURL,params){

        requestURL=hostedDomain+requestURL;    
         return $http.get(requestURL,params).then(function (results) {
            console.log(results);
            return results;   
         });
    };

    requestObj.postRequest=function(requestURL,params){      
         
         requestURL=hostedDomain+requestURL;
    
         return $http.post(requestURL,params).then(function (results) {
            console.log(results);
            return results;   
         });
    };
    
    requestObj.loginRequest=function(){      
         $http.post('http://localhost:8080/Learnterest/j_spring_security_check?username=mugesh1111@gmail.com&password=1234').then(function(results){
            alert(results.data);
        });
    };

    return requestObj;

}]);
