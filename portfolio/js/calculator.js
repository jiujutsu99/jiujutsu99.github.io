var e = [];

$(document).ready(function() {
	$('td').mouseover(function() {
		$(this).addClass('fontred');
	});
	$('td').mouseout(function() {
		$(this).removeClass('fontred');
	});
});

$(document).ready(function() {
	$('td').click(function() {
		decipher(this.innerHTML);
	});
});

function decipher(a) {
	switch (a) {
		case '1': document.getElementById('screen').innerHTML += 1;
				break;
		case '2': document.getElementById('screen').innerHTML += 2;
				break;
		case '3': document.getElementById('screen').innerHTML += 3;
				break;
		case '4': document.getElementById('screen').innerHTML += 4;
				break;
		case '5': document.getElementById('screen').innerHTML += 5;
				break;
		case '6': document.getElementById('screen').innerHTML += 6;
				break;
		case '7': document.getElementById('screen').innerHTML += 7;
				break;
		case '8': document.getElementById('screen').innerHTML += 8;
				break;
		case '9': document.getElementById('screen').innerHTML += 9;
				break;
		case '0': document.getElementById('screen').innerHTML += 0;
				break;
		case '.': document.getElementById('screen').innerHTML += '.';
				break;
		case '(-)': document.getElementById('screen').innerHTML += '-';
				break;
		case '/': e.push(document.getElementById('screen').innerHTML);
				document.getElementById('screen').innerHTML = '';
				if (e.length >= 3)
					e.push(calculate(e));
				e.push('/');
				break;
		case '*': e.push(document.getElementById('screen').innerHTML);
				document.getElementById('screen').innerHTML = '';
				if (e.length >= 3)
					e.push(calculate(e));
				e.push('*');
				break;
		case '+': e.push(document.getElementById('screen').innerHTML);
				document.getElementById('screen').innerHTML = '';
				if (e.length >= 3)
					e.push(calculate(e));
				e.push('+');
				break;
		case '-': e.push(document.getElementById('screen').innerHTML);
				document.getElementById('screen').innerHTML = '';
				if (e.length >= 3)
					e.push(calculate(e));
				e.push('-');
				break;
		case 'Del': document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML.slice(0, -1);
				break;
		case 'Clear': document.getElementById('screen').innerHTML = '';
				e = [];
				break;
		case 'Enter': e.push(document.getElementById('screen').innerHTML);
				var result = calculate(e);
				document.getElementById('screen').innerHTML = result;
				break;
		default: break;
	}
}

function calculate(e) {
	var num2 = e.pop(), op = e.pop(), num1 = e.pop();
	if (isNaN(num2) || !isNaN(op) || isNaN(num1))
		return 'Error';

	switch (op) {
		case '*': return parseFloat(num1) * parseFloat(num2);
		case '/': return parseFloat(num1) / parseFloat(num2);
		case '+': return parseFloat(num1) + parseFloat(num2);
		case '-': return parseFloat(num1) - parseFloat(num2);
		default: return 'Error';
	}
}