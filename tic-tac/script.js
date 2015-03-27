var i = 0;
var gameover = false;

function push(elem){
	if(!gameover){
		var d = document.getElementById(elem);
		if(d.innerHTML == ''){
			if(i%2==0){
				d.innerHTML = '<div class="round">';
			}
			else{
				d.innerHTML = '<div class="cross">';
			}		
			i++;
		}		
		if(i==25){
			alert('Draw!!!');
			gameover = true;
			onemoreGame();
		}
	}
}

function singleGame(){
	var content = document.getElementById('menu-bar');
	content.style.display = 'none';
	var panel = document.getElementById('partner-panel');
	panel.style.display = 'block';
}

function growUpImage(defId, imgId){	
	var definition = document.getElementById(defId);
	definition.style.color = 'blue'
	definition.style.fontSize = '35';
	
	var image  =  document.getElementById(imgId);
	image.style.height = '90%';
	image.style.width = '90%';
}

function growDownImage(defId, imgId){	
	var definition = document.getElementById(defId);
	definition.style.color = 'white'
	definition.style.fontSize = '30';	
	
	var image  =  document.getElementById(imgId);
	image.style.height = '80%';
	image.style.width = '80%';
}

function startWithHuman(){
	var panel = document.getElementById('partner-panel');
	panel.style.display = 'none';

	var content = document.getElementById('tic-tac-wrap');
	content.style.display = 'block';
	
	var desk = document.getElementById('score-desk');
	desk.style.display = 'block';
}

function onemoreGame(){
	var onemore = document.getElementById('onemore');
	onemore.style.display = 'block';
}

function mainMenu(){
	var onemore = document.getElementById('onemore');
	onemore.style.display = 'none';

	var content = document.getElementById('tic-tac-wrap');
	content.style.display = 'none';

	var desk = document.getElementById('score-desk');
	desk.style.display = 'none';

	var content = document.getElementById('menu-bar');
	content.style.display = 'block';

	clean('0');
}

function clean(dept){

}
