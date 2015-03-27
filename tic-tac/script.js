
function push(elem){
	if(!gameover){
		var d = document.getElementById(elem);
		if(d.innerHTML == ''){
			if(currentStep % 2 == 0){
				d.innerHTML = '<div class="round">';
			}
			else{
				d.innerHTML = '<div class="cross">';
			}		
			currentStep++;
		}
		if(currentStep == maxStep){
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

	clean(initStep, initMaxStep);
}

function nextRound(){
	var onemore = document.getElementById('onemore');
	onemore.style.display = 'none';

	currentRound++;
	clean(currentRound, currentRound + initMaxStep);
}

function clean(curStep, mStep){
	for(var id = 0; id < initMaxStep; id++){
		var d = document.getElementById(id+1);
		d.innerHTML = '';
	}
	currentStep = curStep;
	maxStep = mStep;
	gameover = false;
}
