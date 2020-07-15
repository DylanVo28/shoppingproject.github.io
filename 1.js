 $(function(){
 	var vitri=$("header .menutop .menu .navbar ul li:nth-child(2)").position().left+"px";
 	var kt=true;
 	var chieurong;
 	var ngonngu=false;
 	var donam=false;
 	var donu=false;
 	var dotreem=false;
 	gsap.from("section.thanhslide",3,{opacity:0})
 	
 	$(window).scroll(function(event) {
		console.log($(window).scrollTop());
 		if($(window).scrollTop()>270){
 			
 			if(donam==false){
 				$("section.quanaonam .text h1").css({
 					"opacity": '1',
 					
 				});
 				$("section.quanaonam .text a").css({
 					"opacity": '1',
 					
 				});
 				gsap.from("section.quanaonam .text h1",1,{x:300,opacity:0})
 				gsap.from("section.quanaonam .text a",1,{x:300,opacity:0})
 				gsap.to("section.quanaonam .anh div#carousel-example-generic",1,{opacity:1})
 				donam=true;
 			}
			
					
 		}
 		if($(window).scrollTop()>970){
 			if(donu==false){
 				$("section.quanaonu .text h1").css({
 					"opacity": '1',
 					
 				});
 				$("section.quanaonu .text a").css({
 					"opacity": '1',
 				});
				gsap.from("section.quanaonu .text h1",1,{x:-300,opacity:0})
 				gsap.from("section.quanaonu .text a",1,{x:-300,opacity:0})
 				gsap.to("section.quanaonu .anh div#carousel-example-generic",1,{opacity:1})
 				donu=true;
			}
 		}
 		if($(window).scrollTop()>1680){
 			if(dotreem==false){
 				$("section.quanaotreem .text h1").css({
 					"opacity": '1',
 					
 				});
 				$("section.quanaotreem .text a").css({
 					"opacity": '1',
 				});
				gsap.from("section.quanaotreem .text h1",1,{x:300,opacity:0})
 				gsap.from("section.quanaotreem .text a",1,{x:300,opacity:0})
 				gsap.to("section.quanaotreem .anh div#carousel-example-generic",1,{opacity:1})
 				dotreem=true;
			}
 		}
 	});
 	$("header .menutop .menu .navbar ul .themove").css({
 			"left": vitri,
 			"width": "117.86px",
 	});
 	$("header .menutop .menu .navbar ul li:nth-child(2) a").css({
 		"color": 'white',
 	
 	});
 	$("header .menutop .menu .navbar ul li").hover(function() {
 		vitri=$(this).position().left+"px";
 		chieurong=$(this).width()+"px";
 		$("header .menutop .menu .navbar ul .themove").css({
 			"left": vitri,
 			"width": chieurong,
 		});
 		$("header .menutop .menu .navbar ul li:nth-child(2) a").css({
 		"color": 'black',
 	
 		});
 		$(this).find('a').css({
 			"color": 'white',
 		
 		});
 	}, function() {
 		$("header .menutop .menu .navbar ul .themove").css({
 			"left": $("header .menutop .menu .navbar ul li:nth-child(2)").position().left+"px",
 			"width": $("header .menutop .menu .navbar ul li:nth-child(2)").width()+"px",
 		});
 		$(this).find('a').css({
 			"color": 'black',
 		
 		});
 		$("header .menutop .menu .navbar ul li:nth-child(2) a").css({
 		"color": 'white',
 	
 		});
 	});
 	
 	$("header .menutop .menu .navbar button").click(function(event) {
 		if(kt==true){
 			$(this).css({
 			"color": 'white',
 			
 			});
 			kt=false;
 		}
 		else{
 			$(this).css({
 			"color": 'black',
 			
 			});
 			kt=true;
 		}
 		
 	});
 	$("header .thanhden ul li:nth-child(2) a").click(function(event) {
 		$(".signin").css({
 			"opacity": '1',
 			"visibility": 'visible',
 			"z-index":"30",
 		});
 	});
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
})  
 