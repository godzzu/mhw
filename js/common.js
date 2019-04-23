
	function menu_set(){
		$("#nav").load('../monster/left_menu.html');
	}

	function monster_info(path){
		$("#body").children().remove();
		$("#body").load('../monster/'+path+'.html');
	}
