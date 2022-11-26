"use strict";

let input = document.querySelector('#input');
let list = document.querySelector('ul');
let listEl = document.getElementsByTagName('li');
let close = document.getElementsByClassName('close');

// Добавить крестик в список
for (let i = 0; i < listEl.length; i++) {
  let span = document.createElement('span');
  let txt = document.createTextNode('\u00d7');
  span.className = 'close';
  span.appendChild(txt);
  listEl[i].appendChild(span);
}

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.parentNode.removeChild(div);
  }
}

list.addEventListener('click', ev => {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  let li = document.createElement("li");
  let inputValue = input.value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('Поле не может быть пустым!');
  } else {
    document.getElementById('myUl').appendChild(li);
  }
  input.value = '';

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.parentNode.removeChild(div);
    }
  }
}
