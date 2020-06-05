let ul = document.querySelector('ul'),
    li = document.querySelectorAll('li'),
    liFive = document.createElement('li'),
    body = document.querySelector('body'),
    column = document.querySelectorAll('.column'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv');
    
    

console.log(ul);
console.log(li);
console.log(column[1]);
console.log(title);
console.log(adv);
console.log(body);




ul.insertBefore(li[2], li[1]);

liFive.classList.add('menu-item');

ul.appendChild(liFive);
liFive.textContent = 'Пятый пункт';

body.style.background = 'url(img/apple_true.jpg) no-repeat';
body.style.boxSizing = 'content-box';
body.style.backgroundSize = '100%';


title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove(adv);

let question = prompt('Ваше отношение к технике apple?','Good'),
    UserId = document.getElementById('prompt');
    

console.log(UserId);

    UserId.innerHTML = (`<h2>${question}</h2>`);