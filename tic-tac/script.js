/*Functia najatia knopki Single game vizivaet menu vibora soperniika */
function singleGame(){
	var content = document.getElementById('menu-bar');
	content.style.display = 'none';

	var onemore = document.getElementById('onemore');
	onemore.style.display = 'none';

	var content = document.getElementById('tic-tac-wrap');
	content.style.display = 'none';

	var desk = document.getElementById('score-desk');
	desk.style.display = 'none';

	var panel = document.getElementById('partner-panel');
	panel.style.display = 'block';

	var prevpage = document.getElementById('to-prev-page');
	prevpage.style.display = 'block';

	currentPage = 'single';
}
/*Uveli4ivaet izobrajenie pri navedenii kursora */
function growUpImage(defId, imgId){	
	var definition = document.getElementById(defId);
	definition.style.color = 'blue'
	definition.style.fontSize = '35';

	var image  =  document.getElementById(imgId);
	image.style.height = '90%';
	image.style.width = '90%';
}
/*Umenwaet izobrajenie pri navedenii kursora */
function growDownImage(defId, imgId){	
	var definition = document.getElementById(defId);
	definition.style.color = 'white'
	definition.style.fontSize = '30';	

	var image  =  document.getElementById(imgId);
	image.style.height = '80%';
	image.style.width = '80%';
}
/*na4alo igri s 4elovekom*/
function startWithHuman(){
	var panel = document.getElementById('partner-panel');
	panel.style.display = 'none';

	var content = document.getElementById('tic-tac-wrap');
	content.style.display = 'block';

	var desk = document.getElementById('score-desk');
	desk.style.display = 'block';

	currentPage = 'game';
}
/*Posleigrovoe menu */ 
function onemoreGame(){
	var onemore = document.getElementById('onemore');
	onemore.style.display = 'block';
}
/*V glavnoe menu*/ 
function mainMenu(){
	var onemore = document.getElementById('onemore');
	onemore.style.display = 'none';

	var content = document.getElementById('tic-tac-wrap');
	content.style.display = 'none';

	var panel = document.getElementById('partner-panel');
	panel.style.display = 'none';

	var desk = document.getElementById('score-desk');
	desk.style.display = 'none';

	var prevpage = document.getElementById('to-prev-page');
	prevpage.style.display = 'none';

	var content = document.getElementById('menu-bar');
	content.style.display = 'block';

	currentPage = 'main';

	clean(initStep, initMaxStep);
}
/*Sleduywaya partiya*/
function nextRound(){
	var onemore = document.getElementById('onemore');
	onemore.style.display = 'none';

	currentPage = 'game';

	currentRound++;
	clean(currentRound, currentRound + initMaxStep);
}
/*4istit pole ot kamnei i listo4kov*/
function clean(curStep, mStep){
	for(var id = 0; id < initMaxStep; id++){
		var d = document.getElementById(id+1);
		d.innerHTML = '';
	}
	currentStep = curStep;
	maxStep = mStep;
	gameover = false;
}
/*K prediduwei stranice */
function backToPrevPage(){
	if('game' === String(currentPage)){
		singleGame();
		clean(initStep, initMaxStep);
	}
	else if('single' === String(currentPage)){
		mainMenu();
	}
}
/*PUUUUUUUUUSH*/
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
