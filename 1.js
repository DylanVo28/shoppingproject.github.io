 $(function(){
 	var vitri=$("header .menutop .menu .navbar ul li:nth-child(2)").position().left+"px";
 	var kt=true;
 	var chieurong;
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
 	$("header .thanhden ul li:nth-child(1) a").click(function(event) {
 		$(".signin").css({
 			"opacity": '1',
 			"visibility": 'visible'
 		});
 	});
 	$(".signin i").click(function(event) {
 		$(".signin").css({
 			"opacity": '0',
 			"visibility": 'hidden'
 		});
 	});
 	
})  
 