$(function(){
	
	var isMobile = function(){
		var str = navigator.userAgent||navigator.vendor||window.opera;
		return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(str);
	}();
	
	var url = location.href;
	var qs = "";
	if (url.indexOf("?")  > -1){
		qs = url.substring(url.indexOf("?") + 1);
	}
	
	qs = qs.split("&");
	
	var urlParams = {};
	for (var i = 0; i < qs.length; i++){
		var pair = qs[i].split("=");
		
		var name = pair[0];
		var value = null;
		if (pair.length > 1){
			value = pair[1];
		}
		
		urlParams[name] = value;
	}
	
	if (("no_redirect" in urlParams) && urlParams.no_redirect == 'true'){
		return;
	}
	
	if (isMobile){
		$("body").html("<p style='text-align:center; font-weight:bold;padding-top:100px;'><img src='http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.19.3/images/loader-large.gif' /> <br/><br/> Ti stiamo redirezionando alla versione mobile del sito</p>");
		location.href = "http://m.villa-olgabaricella.com";
	}
	
});


