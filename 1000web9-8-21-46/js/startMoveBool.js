function startMove(obj,json,fn){
	
    clearInterval(obj.timer);
    var attr;
    obj.timer = setInterval(function(){
        var isClear = true;
        for(attr in json){
            var cur;
            if(attr == "opacity"){
                cur = Math.round(parseFloat(getStyle(obj,attr))*100);
            }else{
                cur = Math.round(parseFloat(getStyle(obj,attr)));
                if(!cur){
                    cur=0;
                }
            }
            var iSpeed = (json[attr]-cur)/10;
            iSpeed =iSpeed>0? Math.ceil(iSpeed):Math.floor(iSpeed);
            if(cur == json[attr]){
            }else{
                isClear = false;
                if(attr == "opacity"){
                    obj.style.filter = "alpha(opacity:" + parseInt(cur+iSpeed) +")";
                    obj.style.opacity = (cur+iSpeed)/100;
                }else{
                    obj.style[attr]=(cur+iSpeed)+"px";
                }
            }
        }
        if(isClear){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
     
    },30);
}
function getStyle(obj, attr) {
    if (obj.currentStyle) {   //ie
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, false)[attr];  //非ie
    }
}
