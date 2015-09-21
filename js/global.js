$(document).ready(function(){
	toggleContent(null, "home");
})
function toggleContent(object, name){
	$('#body_content').fadeOut(400, function(){
		$('#body_content').html($("#" + name.toLowerCase().replace(" ", "_") + "_content").html());
		$('#body_content').fadeIn();
	});
}