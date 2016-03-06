var data_array = [];

$(function(){
	$.getJSON("data.json",function(data){
		data_array = data;
	});
    
    $(".social_buttons").hover(function(){
            $(this).addClass("animated swing");
        },
        function(){
            $(this).removeClass("animated swing");
    });
});
window.onload = function(){
	var ViewModel = function(){
		this.array = ko.observable(data_array);
	};

	var viewModel = new ViewModel();
	ko.applyBindings(viewModel);

	
};