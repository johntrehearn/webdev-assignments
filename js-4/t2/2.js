const getIdTarget = document.getElementById('target');

const li_1 = document.createElement('li');
li_1.textContent = 'First item';
getIdTarget.appendChild(li_1);

const li_2 = document.createElement('li');
li_2.textContent = 'Second item';
li_2.classList.add('my-item');
getIdTarget.appendChild(li_2);

const li_3 = document.createElement('li');
li_3.textContent = 'Third item';
getIdTarget.appendChild(li_3);
