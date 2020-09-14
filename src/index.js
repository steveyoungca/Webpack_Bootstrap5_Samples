import _ from 'lodash';
import 'bootstrap';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import printMe from './print.js';
import Greetings from './my-helper-module.js';
import Icon from './icon.png';
import Data from './data.xml';

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