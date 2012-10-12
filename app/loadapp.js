yepnope({
	load: configs.app[configs.env],
	complete : function () {
		loadTemplates();
	}
});


function loadTemplates(){
	var templates = 0;
	$.each(configs.templates[configs.env], function(i, template){
		$.ajax({
			url: template,
			type: 'get',
			success: function(data) {
				$("body").append(data);
				templates += 1;
				if(configs.templates[configs.env].length === templates){
					// START YOUR APP
					alert("app started")
				}
					
			}
		});
	});
}
