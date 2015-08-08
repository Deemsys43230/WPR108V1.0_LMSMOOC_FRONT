var requestHandlerApp=angular.module("requestModule",[]);

requestHandlerApp.factory("requestHandler",['$http',function($http){
    
    var requestObj={};

    //*IMPORTANT*//
    var hostedDomain="http://localhost:8085/Learnterest/";

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
    requestObj.loginRequest=function(){      
         $http.post('http://localhost:8085/Learnterest/j_spring_security_check?username=user&password=user').success(function(){
            alert("Do nothing!!");
        });
    };

    return requestObj;

}]);
