$(document).ready(function(){
	toggleContent(null, "home");
	var elementButton = document.querySelector('.elevator');
    var elevator = new Elevator({
        element: elementButton,
        mainAudio: './music/elevator.mp3', // Music from http://www.bensound.com/
        endAudio:  './music/ding.mp3'
    });
})
function toggleContent(object, name){
	$('#body_content').fadeOut(400, function(){
		$('#body_content').html($("#" + name.toLowerCase().replace(" ", "_") + "_content").html());
		$('#body_content').fadeIn();
	});
}