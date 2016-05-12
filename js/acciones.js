// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener('deviceready', function() {
		$('#beep').tap(function(){
			navigator.notification.brrp(1);//numero de veces que deseas que notifique
		});//beep
		$('#btnvibrar').on('tap', function () {
			navigator.notification.vibrate(2000);
   });//vibrar
  });//deviceready
});//ready