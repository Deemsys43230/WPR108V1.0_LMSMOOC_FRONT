
//load error html file
angular.module('commonApp').directive('errordisplay',['$location',function() {
  return {
    templateUrl:'../../app/commonDirectives/errorDisplay/errordisplay.html',
    restrict: 'E',
    link: function(scope, element, attrs){
        scope.$watch(attrs.fadeShown, function() {
            setTimeout(function(){
                $(element).fadeOut(500);
            },8000);
            $('.notify').on('click',function(){
                $(this).fadeOut(350, function(){
                    $(this).hide();
                });
            });
        });
    },
    replace: true,
    scope: {
      message:'=',
      success:'=',
      fail:'='
    }
  }
}]);


//Service for exchange success message
angular.module('commonApp').service('successMessageService', function() {

    this.reset = function(){
        this.message = null;
        this.fail = 0;
        this.success = 0;
    }

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
});
