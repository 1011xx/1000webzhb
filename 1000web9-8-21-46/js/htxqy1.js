$(function(){
	var jsxqy4m2=$("#xqyMain2");
	hddata("xqy1");
	
	function UrlSearch(){
            var name,value;
            var str=location.href; //取得地址栏的url
            alert(str);
            var num=str.indexOf("?");  //？ 的位置
            str=str.substr(num+1); //取得所有参数  获取？后面的url内容。
            var arr=str.split("&"); //各个参数放到数组里  ["pid=1"]
            for(var i=0;i < arr.length;i++){
                num=arr[i].indexOf("=");
                if(num>0){
                    name=arr[i].substring(0,num);
                    value=arr[i].substr(num+1);
                    this[name]=value;
                }
            }
    }
        var request=new UrlSearch(); //实例化
        var pid=request.id;
        alert(pid);
        if(pid=="xqy1"){
        	
        }else{
        	jsxqy4m2.html("");
        	hddata(pid);
        }
        
        function hddata(did){
        	
        	$.ajax({
            url:"../../product/GetProductById_get?id="+pid,
            success:function(data){ //data  { id:101,Data:"string json"}
                var dataJsonOB=JSON.parse(data.Data);
                var imgdata=dataJsonOB.tpdata;
                var imgarray=imgdata.split(",");
                alert(imgarray.length);
                var ulstr="";
                for(var i=0;i<imgarray.length;i++){
                	
                	ulstr+="<li><img src=\"img/xqy4Img/"+imgarray[i]+"\"/></li>";
                }
                
                jsxqy4m2.append(ulstr);
            },
            dataType:"json"
        });
        	
        }
        
        
	
})