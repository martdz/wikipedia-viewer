
$(document).ready(function(){
	$(document).bind('keypress', function(e) {
        if(e.keyCode == 13){
            $("button").trigger('click');
        }
    });
	
	$("button").click(function(){
		var input  = $("input[name='query']").val();
		$("ul").empty();

		$.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&pilimit=max&exintro&exsentences=1&generator=search&exlimit=max&gsrsearch=" + input + "&gsrlimit=10&callback=?", function(json) {
			var pages = json.query.pages;
			var keys = Object.keys(pages);
			for(var i = 0; i < keys.length; i++){
				$("ul").append("<a target='_blank' href='https://en.wikipedia.org/?curid=" + pages[keys[i]].pageid + "'" + "><li><section><h3>" + pages[keys[i]].title + "</h3>" + "<article>" + pages[keys[i]].extract + "</article></section></li></a>");
			}
		});
	});	
});

