
window.onload=function(){
		var oUl=document.getElementById("imgul");
	var oNav=document.getElementById("ul1");
	var timer;
	var pageIndex=1;
	var flag=true;
	start();
	function start(){
		
		clearInterval(timer);
		timer=setInterval(function(){
			//注意实在定时器里面判断
			if(flag){
				if(pageIndex==5){
				   oUl.style.left=0;
				   pageIndex=1;
			    }
		
			    var target={
				    left:-1500*pageIndex,
			    }
			    startMove(oUl,target);
                setPageIndex(pageIndex);//2,3,4,5
			    pageIndex++;
			}
			
			
		},2000);
		
	}
	function setPageIndex(index){
		for(var i=0;i<oNav.children.length;i++){
			oNav.children[i].className="";
		}
		if(index==4){
			oNav.children[0].className="lion";
		}else{
			oNav.children[index].className="lion";
		}
	}
	
	for(var i=0;i<oNav.children.length;i++){
		oNav.children[i].onclick=function(){
			var index=parseInt(this.innerHTML);
			var target={
				left:-1500*(index-1),
			}
			clearInterval(timer);
			startMove(oUl,target,start);
			pageIndex=index;
			 setPageIndex(pageIndex-1);
		}
	}
	
	
	
	oUl.onmouseover=function(){
		flag=false;
	}
	oUl.onmouseout=function(){
		flag=true;
	}
}
