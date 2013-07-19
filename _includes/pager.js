$(document).ready(function()
   {
	alert(y);
	$.get(y, function(data) {
  	$('#post').html(data);
	alert('Load was performed.');
	});	
   });
});

