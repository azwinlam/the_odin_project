import myName from './myName';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = myName('Azwin');
  
    return element;
  }
  
  document.body.appendChild(component());