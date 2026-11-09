'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const getTarget = document.getElementById('target');

for (let i = 0; i < students.length; i++) {
  const createTable = document.createElement('option');
  createTable.value = students[i].id;
  createTable.innerHTML = students[i].name;
  getTarget.appendChild(createTable);
}