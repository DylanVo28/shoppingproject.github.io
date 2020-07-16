$(function() {
	var vitri=$("header .menutop .menu .navbar ul li:nth-child(3)").position().left-18.9995+"px";
	var chieurong;
	var ngonngu=false;
	$("header .thanhden ul li:nth-child(1) a").click(function(event) {
 		if(ngonngu==false){
 			$(this).html("Tiếng Việt");
 			ngonngu=true;
 		}
 		else{
 			$(this).html("English");
 			ngonngu=false;
 		}
 		
 	});
 	$("header .thanhden ul li:nth-child(2) a").click(function(event) {
 		$(".signin").css({
 			"opacity": '1',
 			"visibility": 'visible',
 			"z-index":"30",
 		});
 	});
 	$(".signin i").click(function(event) {
 		$(".signin").css({
 			"opacity": '0',
 			"visibility": 'hidden',
 			"z-index":"0",
 		});
 	});
 	$(".signin .row .text a.formdangky").click(function(event) {
 		$(".signin .row .text .dangnhap").animate({
 			left: "-50%",
 			opacity: "0",
 			visibility :"visible",
 			},
 			400, function() {
 			
 		});
 		$(".signin .row .text .dangky").css({
 			"left": '100%',
 			"opacity":"1",
 			"visibility":"visible",
 		});
 		$(".signin .row .text .dangky").animate({
 			left: "50%",
 			},
 			400, function() {
 			
 		});

 	});
 	$(".signin .row .text a.formdangnhap").click(function(event) {
 		$(".signin .row .text .dangky").animate({
 			left: "-50%",
 			opacity: "0",
 			visibility :"visible",
 			},
 			400, function() {
 			
 		});
 		$(".signin .row .text .dangnhap").css({
 			"left": '100%',
 			"opacity":"1",
 			"visibility":"visible",
 		});
 		$(".signin .row .text .dangnhap").animate({
 			left: "50%",
 			},
 			400, function() {
 			
 		});

 	});
	$("header .menutop .menu .navbar ul .themove").css({
 			"left": vitri,
 			"width": "158.72px",
 	});
 	$("header .menutop .menu .navbar ul li:nth-child(3) a").css({
 		"color": 'white',
 	
 	});
 	$("header .menutop .menu .navbar ul li").hover(function() {
 		vitri=$(this).position().left+"px";
 		chieurong=$(this).width()+"px";
 		$("header .menutop .menu .navbar ul .themove").css({
 			"left": vitri,
 			"width": chieurong,
 		});
 		$("header .menutop .menu .navbar ul li:nth-child(3) a").css({
 		"color": 'black',
 	
 		});
 		$(this).find('a').css({
 			"color": 'white',
 		
 		});
 	}, function() {
 		$("header .menutop .menu .navbar ul .themove").css({
 			"left": $("header .menutop .menu .navbar ul li:nth-child(3)").position().left+"px",
 			"width": $("header .menutop .menu .navbar ul li:nth-child(3)").width()+"px",
 		});
 		$(this).find('a').css({
 			"color": 'black',
 		
 		});
 		$("header .menutop .menu .navbar ul li:nth-child(3) a").css({
 		"color": 'white',
 	
 		});
 	});
});