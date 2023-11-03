const TASK = document.querySelector('#task');
let list = document.querySelector('#list');

let taskList = ['3 Litre Su İç', 'Ödevleri Yap', 'En Az 3 Saat Kodlama Yap', 'Yemek Yap', '50 Sayfa Kitap Oku'];
let taskListString = JSON.stringify(taskList);
// Veri saklama
localStorage.setItem('task', taskListString);
// Veriyi alma
const veri = localStorage.getItem('task');
const parseVeri = JSON.parse(veri);
console.log(parseVeri[1]);

for(let i = 0; i < parseVeri.length; i++) {
    const li = document.createElement('li');
    li.classList.add('d-flex', 'justify-content-between');
    list.append(li);

    const span = document.createElement('span');
    span.innerHTML = parseVeri[i];
    span.classList.add('d-block');
    li.appendChild(span);

    const spanDelete = document.createElement('span');
    spanDelete.addEventListener('click', function() {
        li.remove();
    });
    spanDelete.innerHTML = 'x';
    spanDelete.classList.add('d-block', 'px-3', 'fw-bold', 'text-secondary');
    li.appendChild(spanDelete);
    
    console.log(taskList[i]);
}


function newElement() {
    taskList.push(TASK.value);
    console.log(taskList);

    const li = document.createElement('li');
    li.classList.add('d-flex', 'justify-content-between');
    list.append(li);

    const span = document.createElement('span');
    span.innerHTML = TASK.value;
    span.classList.add('d-block');

    li.appendChild(span);

    const spanDelete = document.createElement('span');
    spanDelete.addEventListener('click', function() {
        li.remove();
    });
    spanDelete.innerHTML = 'x';
    spanDelete.classList.add('d-block', 'px-3', 'fw-bold', 'text-secondary');
    

    li.appendChild(spanDelete);

    TASK.value = '';
}
