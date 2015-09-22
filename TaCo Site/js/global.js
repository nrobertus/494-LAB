$(document).ready(function(){
	toggleContent(null, "home", 0);
	var elementButton = document.querySelector('.elevator');
    var elevator = new Elevator({
        element: elementButton,
        mainAudio: './music/elevator.mp3', // Music from http://www.bensound.com/
        endAudio:  './music/ding.mp3'
    });
});
function toggleContent(object, name, fadeTime){
	fadeTime ? fadeTime = fadeTime : fadeTime = 400;
	$('#body_content').fadeOut(fadeTime, function(){
		$('#body_content').html($("#" + name.toLowerCase().replace(" ", "_") + "_content").html());
		$('#body_content').fadeIn(fadeTime);
	});
}