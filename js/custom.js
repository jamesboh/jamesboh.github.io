var joby = {

	init: function(){
		joby.deferImages();
		joby.animations();
	},

	deferImages: function() {
		var imgDefer = document.getElementsByTagName('img');
		
		for (var i=0; i<imgDefer.length; i++) {
			if(imgDefer[i].getAttribute('data-src')) {
				imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
			} 
		} 			
	},

	animations: function() {
		// amberidentity animation
		var screenshot = $('#amberidentity img');
		TweenMax.to(screenshot, 30, {marginTop: '-235%', ease: Power0.easeNone, repeat:-1, yoyo:true});
	}


}

window.onload = joby.init();