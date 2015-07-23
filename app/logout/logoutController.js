var userApp= angular.module('userApp', ["requestModule"]);

userApp.controller("logoutController",function(requestHandler){

alert("ok");
console.log("hit login controller");
requestHandler.getRequest("/api/j_spring_security_logout","");

});