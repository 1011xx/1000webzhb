$(function(){
	
	var $jsdiv=$("#fgc");
	var $jsdivlist=$("#fgc div");
	var count=0;
	var $jsbt=$("#tb");
	var $jsbtlist=$("#tb li img");

	$jsdivlist.mouseenter(function(){
		var $index=$(this).index()+1;
		$(".pimg img").attr('src','img/process-img0'+$index+'.png');
	})
	
	
	$jsbtlist.mouseenter(function(){
		var $classname=$(this).attr("class");
		if($classname=="img1"){
			count++;
			if(count<=1){
				
			}else{
				var $newsrc=$(this).attr('src').replace(".png","20.png");
		    $(this).attr('src',$newsrc);
			}
			
		}else{
			var $newsrc=$(this).attr('src').replace(".png","20.png");
		    $(this).attr('src',$newsrc);
		}
		
	})
	$jsbtlist.mouseleave(function(){
		var $newsrc2=$(this).attr('src').replace("20.png",".png");
		$(this).attr('src',$newsrc2);
	})
	
	
	
})