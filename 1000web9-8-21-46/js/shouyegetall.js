$(function() {
	var jsteam = $("#team");
	alert(jsteam);
	$.ajax({
		url: "../../product/GetProductsByPage_get",
		data: {
			"pagesize": 8,
			"pageindex": 3
		},
		success: function(data) {
			//data  array
			for(var i = 0; i < data.length; i++) {
				//把data 里面的string 主动转成对象；
				var dataObj = JSON.parse(data[i].Data);
				var trOb = $("<dl><dt>" +
					"<img src=\"img/" + dataObj.imgsrc + "\"/>" +
					"<p><span>" + dataObj.name + "</span>" +
					"<i>" + dataObj.sf + "</i>" +
					"<b>成交单数：2</b>" +
					"<b>好评：100%</b>" +
					"<b>作品数:2</b></p></dt>" +
					"<dd>" + dataObj.sm + "</dd></dl>"
				);
				jsteam.append(trOb);
			}
		},
		dataType: "json"
	})
});