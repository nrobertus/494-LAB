$(document).ready(function(){
	$(".nav_tab").click(function(evt, item){
		$(".nav_tab").removeClass("active");
		$(this).addClass("active");
	});	
});
