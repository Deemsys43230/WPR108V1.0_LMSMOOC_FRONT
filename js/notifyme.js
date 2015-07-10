function Notifyme(){
	this.closer = '<img class="notifyme_closer icon icon-close" alt="" src="../img/close-icon.png" />';
	this.time;
	this.count = 0;
}

Notifyme.prototype.config = function(data){
	this.time = data.showtime;
	this.position = data.position
	$("body").append('<div class="notifyme_wrap '+data.position+'"></div>');
}

Notifyme.prototype.create = function(data){
	this.appendNotification(data.type, data.title, data.text);
}

Notifyme.prototype.appendNotification = function(type, title, text){
	this.count++;
	var notifybody = '<div class="notifyme_notification '+type+' notify_'+this.count+' ">'+this.closer+'<div class="head">'+title+'</div><div class="body">'+text+'</div></div>';
	if(this.position == "topleft" || this.position == "topright"){
		$(".notifyme_wrap").append(notifybody);
	}else{
		$(".notifyme_wrap").prepend(notifybody);
	}
	var element = $(".notify_"+this.count);
	new NotifymeAutoCloser(element);
	new NotifymeManualCloser(element);
}

Notifyme.prototype.removeNotification = function(element){
	element.fadeOut(500, function(){
		this.remove();
	});
}

function NotifymeAutoCloser(element){
	setInterval(function(){
		notifyme.removeNotification(element);
	}, notifyme.time);
}

function NotifymeManualCloser(element){
	element.children(".notifyme_closer").click(function(){
		notifyme.removeNotification(element);
	});
}


notifyme = new Notifyme();