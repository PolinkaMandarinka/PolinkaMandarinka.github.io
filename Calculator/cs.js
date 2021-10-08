/*var mem = 0;
var act = '';

function action(action){
	mem = parseInt(inp.value);
	act = action;
	inp.value = 0;
}

function number_click(n){
	if(inp.value == '0'){
		inp.value = n;
	}else{
		inp.value += n;
	}
}

function clear_input(){
	inp.value = 0;
	mem = 0;
	act = '';
}

function del_last(){
	inp.value = inp.value.slice(0,-1);
	if(!inp.value.length)inp.value = 0;;
}

function result(){
	var val = parseInt(inp.value);
	
	switch (act){
		case 'a0':
			inp.value = mem + val;
		break;
		case 'a1':
			inp.value = mem - val;
		break;
		case 'a2':
			inp.value = mem * val;
		break;
		case 'a3':
			inp.value = Math.round(mem / val);
		break;
	}
	act = '';
}

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.btn').
		forEach(
			(obj) => { 

				obj.addEventListener('click',()=>{
					obj.setAttribute('active','');
				},false);

				document.addEventListener('mouseup',()=>{
					setTimeout(()=>{
						obj.removeAttribute('active');
					},1);
				},false);
				document.addEventListener('keyup',()=>{
					obj.removeAttribute('active');
				},false);

			}
		);
});

document.onkeydown = function(e){
	switch(e.key){
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
		case '0':
			document.getElementById('n'+e.key).click();
		break;
		case '+':
			a0.click();
		break;
		case '-':
			a1.click();
		break;
		case '*':
			a2.click();
		break;
		case '/':
			a3.click();
		break;
		case 'Backspace':
			a4.click();
		break;
		case 'с':
		case 'С':
			a5.click();
		break;
		case '=':
		case 'Enter':
			a6.click();
		break;

	}
};*/

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.num').
		forEach(
			(obj) => {
				obj.addEventListener('click',()=>{
					put_digit(obj.innerText);
				},false);
			}
		);

	document.querySelectorAll('.act').
		forEach(
			(obj) => {
				obj.addEventListener('click',()=>{
					set_action(obj.innerText);
				},false);
			}
		);
});

var memory = 0;
var action = '';

function put_digit(num){
	if(input.value === '0'){
		input.value = num;
	}else{
		input.value += num;
	}
}

function set_action(act){
	switch(act){
		case '=':
			result();
			break;
		case '<':
			del();
			break;
		case 'C':
			erase();
		default:
			memory = parseInt(input.value);
			input.value = 0;
			action = act;
	}
}

function erase(){
	input.value = 0;
	memory = 0;
	action = '';
}

function del(){
	input.value = input.value.slice(0,-1);
	if(!input.value.length)input.value = 0;;
}

function result(){
	var val = parseInt(input.value);
	
	switch (action){
		case '+':
			input.value = memory + val;
		break;
		case '-':
			input.value = memory - val;
		break;
		case '*':
			input.value = memory * val;
		break;
		case '/':
			input.value = Math.round(memory / val);
		break;
	}
	action = '';
}


document.onkeydown = function(e){
	switch(e.key){
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
		case '0':
			put_digit(e.key);
		break;
		case '+':
		case '-':
		case '*':
		case '/':
			set_action(e.key);
		break;
		case 'Backspace':
			set_action('<');
		break;
		case 'с':
		case 'С':
			set_action('C');
		break;
		case '=':
		case 'Enter':
			set_action('=');
		break;

	}
}