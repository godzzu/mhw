$(function(){
	
	
	
	
	
	
	function conf(){
		
		$('#bukiconf1').css('display', 'none');
		$('#bukiconf2').css('display', 'none');
		$('#bukiconf3').css('display', 'none');
		$('#bukiconf4').css('display', 'none');
		$('#bukiconf5').css('display', 'none');
		$('#bukiconf6').css('display', 'none');
		$('#bukiconf7').css('display', 'none');
		$('#bukiconf8').css('display', 'none');
		$('#bukiconf9').css('display', 'none');
		$('#bukiconf10').css('display', 'none');
		$('#bukiconf11').css('display', 'none');
		$('#bukiconf12').css('display', 'none');
		$('#bukiconf13').css('display', 'none');
		$('#bukiconf14').css('display', 'none');
		$('#bukiconf15').css('display', 'none');
		
		$('#bukiconf_type1').css('display', 'none');
		$('#bukiconf_type2').css('display', 'none');
		
		var conf_val = $("select#t").val();
		if(conf_val == 1){
			$('#bukiconf1').css('display', 'inline');
		}else if(conf_val == 2){
			$('#bukiconf2').css('display', 'inline');
		}else if(conf_val == 3){
			$('#bukiconf3').css('display', 'inline');
		}else if(conf_val == 4){
			$('#bukiconf4').css('display', 'inline');
		}else if(conf_val == 5){
			$('#bukiconf5').css('display', 'inline');
		}else if(conf_val == 6){
			$('#bukiconf6').css('display', 'inline');
		}else if(conf_val == 7){
			$('#bukiconf7').css('display', 'inline');
		}else if(conf_val == 8){
			$('#bukiconf8').css('display', 'inline');
		}else if(conf_val == 9){
			$('#bukiconf9').css('display', 'inline');
		}else if(conf_val == 10){
			$('#bukiconf10').css('display', 'inline');
		}else if(conf_val == 11){
			$('#bukiconf11').css('display', 'inline');
		}else if(conf_val == 12){
			$('#bukiconf12').css('display', 'inline');
		}else if(conf_val == 13){
			$('#bukiconf12').css('display', 'inline');
			$('#bukiconf13').css('display', 'inline');
		}else if(conf_val == 14){
			$('#bukiconf14').css('display', 'inline');
		}else if(conf_val == 15){
			$('#bukiconf15').css('display', 'inline');
		}
		
		
		if(conf_val < 12){
			$('#bukiconf_type1').css('display', 'inline');
		}else{
			$('#bukiconf_type2').css('display', 'inline');
		}
		
	};
	
	$("select#t").change(function(){
		conf();
	});
	
	$(window).load(function(){
		conf();
	});
	
	
	
	
	});