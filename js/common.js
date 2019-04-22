
	function menu_set(){
		$("#nav").load('../monster/left_menu.html');
	}

	function moster_info(path){
		$("#body").children().remove();
		$("#body").load('../monster/'+path+'.html');
	}
