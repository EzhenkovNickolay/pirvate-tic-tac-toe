var i = 0;
var gameover = false;

function push(number){
	if(!gameover){
		var round = document.getElementById('round-'+number);
		var cross = document.getElementById('cross-'+number);
		if(round.style.display == '' && cross.style.display == ''){
			if(i%2==0){
				cross.style.display = 'block';
			}
			else{
				round.style.display = 'block'; 
			}		
			i++;
		}
	
		var round11 = document.getElementById('round-1-1');
		var round12 = document.getElementById('round-1-2');
		var round13 = document.getElementById('round-1-3');
		if(round11.style.display == 'block' && round12.style.display == 'block' && round13.style.display == 'block'){
			var line = document.getElementById('line-1-2-3');
			line.style.display = 'block';
			alert('Game Over!!!');
			gameover = true;
		}
		if(i==25){
			alert('Draw!!!');
			gameover = true;
		}
	}
}

function single(){
	var content = document.getElementById('menu-bar');
	content.style.display = 'none';
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