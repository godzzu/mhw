
	function menu_set(){
		$("#nav").load('../monster/left_menu.html');
	}

	function monster_info(path){
		$(".content").children().remove();
		$(".content").load('../monster/'+path+'.html');
	}

	function area_info(path){
		$(".content").children().remove();
		$(".content").load('../area/'+path+'.html');
	}

	function weapon_info(path){
		$(".content").children().remove();
		$(".content").load('../weapon/'+path+'.html');
	}

	function jewel_info(path){
		$(".content").children().remove();
		$(".content").load('../jewel/'+path+'.html');
	}

	function charm_info(path){
		$(".content").children().remove();
		$(".content").load('../charm/'+path+'.html');
	}
