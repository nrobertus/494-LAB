$(document).ready(function(){
	$(".nav_tab").click(function(evt, item){
		$(".nav_tab").removeClass("active");
		$(this).addClass("active");
	});	
	var form = document.getElementById('main_form');
	if (form.attachEvent) {
    form.attachEvent("submit", processForm);
	} else {
	    form.addEventListener("submit", processForm);
	}
});

function processForm(e, data) {
    //if (e.preventDefault) e.preventDefault();
    var email = $('#input_email').val();
    var name = $('#nameInput').val();

     $.ajax({
       type: "POST",
       url:'/form',
       contentType: 'application/json', 
       data: JSON.stringify({name:name, email:email}), // serializes the form's elements.
       success: function(data)
       {
           alert(data); // show response from the php script.
       }
     });
    return true;
}
