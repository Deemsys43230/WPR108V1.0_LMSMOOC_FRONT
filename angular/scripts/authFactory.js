var myApp=angular.module("authModule",['ngCookies']);

myApp.factory("authFactory",["$cookieStore","$http",function($cookieStore,$http){
    
    var userObj={};

    userObj.setUserObj=function(userObj){
        $cookieStore.put("userObj",userObj);
    };

    userObj.getUserObj=function(){
        return $cookieStore.get("userObj");        
    };

    userObj.setAuthCookie=function(response){
        userObj=response;
    };

    userObj.setRole=function(roleId)
    {
        $cookieStore.put("roleId",roleId);
    };
  userObj.getRole=function(){
        return $cookieStore.get("roleId");        
    };
    userObj.isAuthenticated=function(){
        if($cookieStore.get("userObj")== undefined)//If not available
        {
            return false;
        }
        else
        {
            return true;
        }
    };
    return userObj;

}]);



myApp.factory("oAuthFactory",["$http","authFactory",function($http,authFactory){
    
    var oAuthObj={};

    oAuthObj.requestLogin=function(username,password)
    {
       return $http.get("http://localhost:8080/Learnterest/oauth/token?grant_type=password&client_id=restapp&client_secret=restapp&username="+username+"&password="+password).success(function (results) {
            console.log(results);     
            authFactory.setUserObj(results);
            return results;
         }).error(function(){
            console.log('failed');
            return false;
         });
    };

 oAuthObj.requestRole=function(requestURL,params)
    {
         requestURL="http://localhost:8080/Learnterest/"+requestURL;
       return $http.post(requestURL,params).then(function (results) {
            console.log(results);     
            authFactory.setRole(results.data);
            JSON.stringify(authFactory.getRole());
            return results;
         });
    };
    return oAuthObj;

}]);



