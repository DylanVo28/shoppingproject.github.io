 $(function(){
 	var vitri=$("header .logo .row .bg-faded li:nth-child(1)").position().left+430-25 +"px";
 	var chieudai=$("header .logo .row .bg-faded li:nth-child(1)").width()-18.059 + "px";
 	// console.log($("body").width()+"px");
 	// console.log(vitri);

 	$("header .logo .row .bg-faded .themove").css({
 			"left": vitri,
 			"width": chieudai,
 		});

 	$("header .logo .row .bg-faded li").hover(function() {
 		vitri=$(this).position().left+430-25 +"px";
 		chieudai=$(this).width() + "px";
 		$("header .logo .row .bg-faded .themove").css({
 			"left": vitri,
 			"width": chieudai,
 		});
 		$("header .logo .row .bg-faded li a").removeClass('fonttrang');
 		$(this).find('a').addClass('fonttrang');
 	}, function() {
 		$("header .logo .row .bg-faded .themove").css({
 			"left": "421px",
 			"width": "105px",
 		});

 		$("header .logo .row .bg-faded li a").removeClass('fonttrang');
 		$("header .logo .row .bg-faded li:nth-child(1) a").addClass('fonttrang');
 	});
 	$(window).scroll(function(event) {
 		$("header .logo .row .bg-faded .themove").css({
 			"top": 171-$(window).scrollTop() +"px",
 			
 		});
 	});
})  
 