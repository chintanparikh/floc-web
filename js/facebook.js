$(document).ready(function() {
	$('#connect').click(function() {
		FB.login(function(response) {
		  if (response.authResponse) {
		    FB.api('/me/events', function(response) {
		      $("#connect").toggleClass('hidden');
		       
		      $(response.data).each(function(_, elem)
		      {		 		
		      	var start = new Date(elem.start_time);
		      	var current = new Date();
		      	if (elem.end_time !== undefined)
		      	{
		      		end_time = new Date(elem.end_time);
		      	}
		      	else
		      	{
		      		end_time = 0
		      	}
		      	if ((current - start < 86400 && current > start) || (end_time > current && current > start))
		      	{
			       	FB.api(elem.id + '/picture?width=206&height=206', function(response) {
			       	  $(".events").append('<div class="event"><a href="timeline.html?event=' + elem.id + '"><img src="' + response.data.url + '" class="thumbnail" /> <span class="description">' + elem.name.replace(/^(.{16}[^\s]*).*/, "$1") + '</span></a></div>');
			       	  grayscale();
			       	});
			    }
		      });

		    });
		   } else {
		     console.log('User cancelled login or did not fully authorize.');
		   }
		}, {scope: 'user_events, read_stream'});
    });
	
});

function grayscale()
{
	$(".event img").each(function(_, img)
	{
		$(img).hover(function()
		{
            $(this).toggleClass('grayscale');
		});
	});
}