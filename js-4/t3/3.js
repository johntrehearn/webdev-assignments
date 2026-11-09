'use strict';
const names = ['John', 'Paul', 'Jones'];

const getTarget = document.getElementById('target');

for (let i = 0; i < names.length; i++) {
  const createTable = document.createElement('li');
  createTable.innerHTML = names[i];
  getTarget.appendChild(createTable);
}
