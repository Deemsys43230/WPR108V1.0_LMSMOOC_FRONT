$('.SeeMore').click(function(){
    var $this = $(this);
    $this.toggleClass('SeeMore');
    if($this.hasClass('SeeMore')){
    $this.text('Read More');
    } else {
    $this.text('Read Less');
    }
});