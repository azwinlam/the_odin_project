console.log("hi")

const container = document.querySelector('#container');

const ptext = document.createElement('p');
ptext.classList.add('red-text');
ptext.textContent = "Hey I'm red!";
ptext.style.cssText = 'color: red;';
container.appendChild(ptext);

const h3text = document.createElement('h3');
h3text.classList.add('blue-test');
h3text.textContent = "I'm a blue h3!";
h3text.style.cssText = 'color: blue;';
container.appendChild(h3text);

const newDiv = document.createElement('div');
newDiv.classList.add('blackedpink');
newDiv.style = 'border: 2px solid black; background-color: pink';

const newH1 = document.createElement('h1')
newH1.textContent = "I'm in a div!"
newDiv.appendChild(newH1);

const newP = document.createElement('p')
newP.textContent = 'ME TOO!'
newDiv.appendChild(newP);


container.appendChild(newDiv);

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});


const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e){
    console.log(e.target)
    e.target.style.background = 'blue';
});