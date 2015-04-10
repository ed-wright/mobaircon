'use strict'; 
//navScroll Fuction
function navScroll() {
	var scrollStart = 0;
	var startchange = $('#services');
	var offset = startchange.offset().top - 51;
	console.log(offset);
	if (startchange.length){
		$(document).scroll(function() { 
			scrollStart = $(this).scrollTop();
			if(scrollStart > offset) {
				$('.navbar-default').css('background-color', '#000');
			} else {
				$('.navbar-default').css('background-color', 'rgba(0,0,0,0.5)');
			}
		});
	}
}

//Toast
function showToast(type, title, msg) {
    toastr.options = {
	  'closeButton': false,
	  'debug': false,
	  'newestOnTop': false,
	  'progressBar': true,
	  'positionClass': 'toast-bottom-left',
	  'preventDuplicates': false,
	  'onclick': null,
	  'showDuration': '100',
	  'hideDuration': '100',
	  'timeOut': '20000',
	  'extendedTimeOut': '2000',
	  'showEasing': 'swing',
	  'hideEasing': 'linear',
	  'showMethod': 'fadeIn',
	  'hideMethod': 'fadeOut'
	};
	if (type === 'warning'){
		toastr.warning(msg,title);
	}
	else if (type === 'success') {
 		toastr.success(msg,title);
	}
	else if (type === 'danger') {
 		toastr.danger(msg,title);
	}
	else if (type === 'info') {
 		toastr.info(msg,title);
	}
	else {
		toastr.success(msg,title);
	}
}

//run Functions
$(document).ready(function(){    
	showToast('success', 'Site Version', '0.9.7');
	showToast('warning', '', 'This site is still under construction!');
	window.setInterval(function(){   
		navScroll();
	}, 10000);
});

