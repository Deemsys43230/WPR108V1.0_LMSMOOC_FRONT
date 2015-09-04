var emailApp= angular.module('commonApp', ["requestModule"]);

emailApp.controller('emailController',function($routeParams,$http,$location,requestHandler,successMessageService){
    var code = this;
    code = $routeParams.verificationCode;
    code = code.substring(18);
    requestHandler.postRequest("confirmMail.json",code,0).then(function(results){
        if(results.data.loginDetailsForms==1){
            successMessageService.setMessage("Your Account is Activated Successfully, Kindly login now.");
            successMessageService.setIsFail(0);
            successMessageService.setIsSuccess(1);
            $location.path("/login");
        }
            
        else{
            successMessageService.setMessage("Your Request has been expired. Kindly Register With New Email ID");
            successMessageService.setIsFail(1);
            successMessageService.setIsSuccess(0);
            $location.path("/register");
        }
    });
});


//Service for exchange success message
angular.module('commonApp').service('successMessageService', function() {

    this.setMessage = function(message) {
        this.message = message;
    };

    this.getMessage = function() {
        return this.message;
    };

    this.setIsFail = function(fail) {
        this.fail = fail;
    };

    this.getIsFail = function() {
        return this.fail;
    };

    this.setIsSuccess = function(success) {
        this.success = success;
    };

    this.getIsSuccess = function() {
        return this.success;
    };

    this.reset = function(){
        this.message = null;
        this.fail = 0;
        this.success = 0;
    }

});