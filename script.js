//written by April Tsai, 08/19/2020

const counter = document.querySelector('.counter');
const AddCount = document.querySelector('#AddCountBtn');
const LowerCount = document.querySelector('#LowerCountBtn');

AddCount.addEventListener('click', incrementCounter);
LowerCount.addEventListener('click', decrementCounter);

let count = 0;

function incrementCounter(){
	count++;
	counter.innerHTML = count;
	if (counter.innerHTML>'0'){
		counter.style.color = '#50BFE6';
	}else if(counter.innerHTML === '0'){
		counter.style.color = 'white';
	}
	counter.animate([{opacity:'0.2'}, {opacity:'1.0'}], {duration:500, fill:'forwards'});
}

function decrementCounter(){
	count--;
	counter.innerHTML = count;
		if (counter.innerHTML<'0'){
		counter.style.color = '#FF355E';
	}else if(counter.innerHTML === '0'){
		counter.style.color = 'white';
	}
	counter.animate([{opacity:'0.2'}, {opacity:'1.0'}], {duration:500, fill:'forwards'});
}