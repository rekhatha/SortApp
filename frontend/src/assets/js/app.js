$(".details .edit-link").each(function() {
	$(this).click(function(e) {
		$(".non-editable").fadeOut(100);
		$(".content-main").find(".editable").fadeIn(200);
		$(".details .btn-worklist").css("display", "none");
		$(".details .sav-cnlbtns").css("display", "block");

		e.preventDefault();
	});
});

$(".details .btn-save, .details .btn-cancel").click(function(e) {
	$(".content-main").find(".non-editable").fadeIn(100);
	$(".content-main").find(".editable").fadeOut(200);
	$(".details .btn-worklist").css("display", "block");
	$(".details .sav-cnlbtns").css("display", "none");
	$(".")
	e.preventDefault();
});
function alignTableHeadersForResponsiveUI(){
	var i = 1;
	$(".mobile-responsive table thead th:visible").each(function(){
		console.log($(".mobile-responsive table td:nth-child("+i+") span.table-head").text());
		if ($(".mobile-responsive table td:nth-child("+i+") span.table-head").text() == ""){
			$(".mobile-responsive table td:nth-child("+i+")").prepend("<span class='table-head'>");
			$(".mobile-responsive table td:nth-child("+i+") span.table-head").prepend($(this).text());
			i++;
		}
	})
	//setTimeout(function(){
		/*var thCount = $(".mobile-responsive table thead th").size()/2;
		console.log("cdoutnt" + thCount);
		var i=1; 
		for(i; i<=thCount; i++){
			var thText = $(".mobile-responsive table thead th:nth-child("+i+")").text();
			$(".mobile-responsive table td:nth-child("+i+")").prepend("<span class='table-head'>");
			$(".mobile-responsive table td:nth-child("+i+") span.table-head").prepend(thText);
		};*/
	//}, 1000);
}



$(document).ready(function() {
	$('.panel-collapse').collapse({
		'toggle' : false
	});
	$('input[type=text][name=searchText]').tooltip({
		placement : "right",
		trigger : "focus"
	});

	//if($(window).width() < 768){
	// responsive UI for 800x600
		
	//}
		// For search box minimum length
		$(".searchInputText").on("keyup", function() {
		    if (this.value.length < 2) {
		        $(this).tooltip("show");
		    } else {
		        $(this).tooltip("hide");
		    }
		}).tooltip({
		    placement: "right",
		    trigger: "focus",
		    title: "Test"
		}); 
		$(".searchInputText ").val('');
	/*$(".searchInputText").on("keypress", function() {
		if ($(".searchInputText").val().length > 2) {
			$('input[type=text][name=searchText]').tooltip('disable');

		} else {
			$('input[type=text][name=searchText]').tooltip({
				placement : "right",
				trigger : "focus"
			});
		}
	});*/
		// For the auto-complete select list
		/*$('#choose').click(function (e) {
	        e.stopPropagation();
	        $(this).siblings('select').css('width', $(this).outerWidth(true)).toggle();
	    });

	    $('#options').change(function (e) {
	        e.stopPropagation();
	        var val = this.value || 'Select options';
	        $(this).siblings('#choose').text(val);
	        $(this).hide();
	    });

	    $('select').find('option').on({
	        'mouseover': function () {
	            $('.hover').removeClass('hover');
	            $(this).addClass('hover');
	        },
	            'mouseleave': function () {
	            $(this).removeClass('hover');
	        }
	    }); */
});
