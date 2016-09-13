$(function(){
	
	var $jsul=$("#bzzxfgc");
	var $jslilist=$("#bzzxfgc li");
	var $jsimg=$(".bzzxpimg");
	var $jsbtlist=$(".bzzxpimg img");

	$jslilist.mouseenter(function(){
		var $index=$(this).index()+1;
		$jsbtlist.attr('src','img/bzzxImg/bzzx'+$index+'.jpg');
	})
	
	
	
	
	
})