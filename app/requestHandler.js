var requestHandlerApp=angular.module("requestModule",[]);

requestHandlerApp.factory("requestHandler",['$http',function($http){
    
    var requestObj={};

    //*IMPORTANT*//
    var hostedDomain="http://localhost:8085/Learnterest/";

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
         $http.post('http://localhost:8085/Learnterest/j_spring_security_check?username=magesh123@gmail.com&password=magesh@123').success(function(){
            alert("Do nothing!!");
        });
    };

    return requestObj;

}]);
