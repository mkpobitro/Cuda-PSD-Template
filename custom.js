jQuery(document).ready(function(){
	

// jquery knob plugin start:
		$(".dial-1").knob();
		$(".dial-2").knob();
		$(".dial-3").knob();
		$(".dial-4").knob();

		var value =$('.dial-1').val();
		$('.dial-1').val(value+'%')

		var value =$('.dial-2').val();
		$('.dial-2').val(value+'%')

		var value =$('.dial-3').val();
		$('.dial-3').val(value+'%')

		var value =$('.dial-4').val();
		$('.dial-4').val(value+'%')
		
    
// jquery wow animation:
    new WOW().init();
    
// jQuery menu:
    
    jQuery(".service").click(function(){
        jQuery("#service").slideUp(2000);
    })
        
    
	
})