import _ from 'lodash';
import 'bootstrap';
// You can specify which plugins you need
//import { Tooltip, Toast, Popover } from 'bootstrap';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import printMe from './print.js';
import Greetings from './my-helper-module.js';
import Icon from './icon.png';
import Data from './data.xml';

console.log("Hello webpack!");

const fancyFunc = () => {
  return [1, 2];
};

const [a, b] = fancyFunc();



function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);


  return element;
}




document.body.appendChild(component());