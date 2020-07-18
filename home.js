 $(function(){
 	var vitri=$("header .menutop .menu .navbar ul li:nth-child(2)").position().left+"px";
 	
 	var kt=true;
 	var chieurong;
 	var ngonngu=false;
 	var donam=false;
 	var donu=false;
 	var dotreem=false;
 	
 	gsap.from("section.slides",3,{opacity:0})
 	
 	$(window).scroll(function(event) {
		console.log($(window).scrollTop());
		if($(window).scrollTop()==0){
			donam=false;
			donu=false;
			dotreem=false;
			$("section.men .pic div#carousel-example-generic").css({
				"opacity": '0',
			});
			$("section.women .pic div#carousel-example-generic").css({
				"opacity": '0',
			});
			$("section.kid .pic div#carousel-example-generic").css({
				"opacity": '0',
			});
			$("section.men .text h1").css({
 					"opacity": '0',
 					
 			});
 			$("section.men .text a").css({
 				"opacity": '0',
 			});
 			$("section.women .text h1").css({
 					"opacity": '0',
 					
 			});
 			$("section.women .text a").css({
 				"opacity": '0',
 			});
 			$("section.kid .text h1").css({
 					"opacity": '0',
 					
 			});
 			$("section.kid .text a").css({
 				"opacity": '0',
 			});
 			
		}
 		if($(window).scrollTop()>270){
 			
 			if(donam==false){
 				$("section.men .text h1").css({
 					"opacity": '1',
 					
 				});
 				$("section.men .text a").css({
 					"opacity": '1',
 					
 				});
 				gsap.from("section.men .text h1",1,{x:300,opacity:0})
 				gsap.from("section.men .text a",0.6,{x:300,opacity:0})
 				gsap.to("section.men .pic div#carousel-example-generic",1,{opacity:1})
 				donam=true;
 			}
			
					
 		}
 		if($(window).scrollTop()>970){
 			if(donu==false){
 				$("section.women .text h1").css({
 					"opacity": '1',
 					
 				});
 				$("section.women .text a").css({
 					"opacity": '1',
 				});
				gsap.from("section.women .text h1",1,{x:-300,opacity:0})
 				gsap.from("section.women .text a",0.6,{x:-300,opacity:0})
 				gsap.to("section.women .pic div#carousel-example-generic",1,{opacity:1})
 				donu=true;
			}
 		}
 		if($(window).scrollTop()>1680){
 			if(dotreem==false){
 				$("section.kid .text h1").css({
 					"opacity": '1',
 					
 				});
 				$("section.kid .text a").css({
 					"opacity": '1',
 				});
				gsap.from("section.kid .text h1",1,{x:300,opacity:0})
 				gsap.from("section.kid .text a",0.6,{x:300,opacity:0})
 				gsap.to("section.kid .pic div#carousel-example-generic",1,{opacity:1})
 				dotreem=true;
			}
 		}
 	});
 	$("header .menutop .menu .navbar ul .tagmove").css({
 			"left": vitri,
 			"width": "117.86px",
 	});
 	$("header .menutop .menu .navbar ul li:nth-child(2) a").css({
 		"color": 'white',
 	
 	});
 	$("header .menutop .menu .navbar ul li").hover(function() {
 		vitri=$(this).position().left+"px";
 		chieurong=$(this).width()+"px";
 		$("header .menutop .menu .navbar ul .tagmove").css({
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
 		$("header .menutop .menu .navbar ul .tagmove").css({
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
 	$("header .topbar ul li:nth-child(2) a").click(function(event) {
 		$(".signin").css({
 			"opacity": '1',
 			"visibility": 'visible',
 			"z-index":"30",
 		});
 	});
 	$("header .topbar ul li:nth-child(1) a").click(function(event) {
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
 	$(".signin .row .text a.formregister").click(function(event) {
 		$(".signin .row .text .login").animate({
 			left: "-50%",
 			opacity: "0",
 			visibility :"visible",
 			},
 			400, function() {
 			
 		});
 		$(".signin .row .text .register").css({
 			"left": '100%',
 			"opacity":"1",
 			"visibility":"visible",
 		});
 		$(".signin .row .text .register").animate({
 			left: "50%",
 			},
 			400, function() {
 			
 		});

 	});
 	$(".signin .row .text a.formsignin").click(function(event) {
 		$(".signin .row .text .register").animate({
 			left: "-50%",
 			opacity: "0",
 			visibility :"visible",
 			},
 			400, function() {
 			
 		});
 		$(".signin .row .text .login").css({
 			"left": '100%',
 			"opacity":"1",
 			"visibility":"visible",
 		});
 		$(".signin .row .text .login").animate({
 			left: "50%",
 			},
 			400, function() {
 			
 		});

 	});
})  
 