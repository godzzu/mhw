
	function menu_set(){
		$("#nav").load('../monster/left_menu.html');
	}

	function monster_info(path){
		$("#body").children().remove();
		$("#body").load('../monster/'+path+'.html');
	}

	function area_info(path){
		$("#body").children().remove();
		$("#body").load('../area/'+path+'.html');
	}

	function weapon_info(path){
		$("#body").children().remove();
		$("#body").load('../weapon/'+path+'.html');
	}

	function skill_info(path){
		$("#body").children().remove();
		$("#body").load('../skill/'+path+'.html');
	}
