const TASK = document.querySelector('#task');
let list = document.querySelector('#list');
let taskList;

// get date from localStorage
const veri = localStorage.getItem('task');

// 'task' da veri var mı?
if(veri) {
    taskList =JSON.parse(veri);
}else {
    taskList = ['3 Litre Su İç', 'Ödevleri Yap', 'En Az 3 Saat Kodlama Yap', 'Yemek Yap', '50 Sayfa Kitap Oku'];
    localStorage.setItem('task', JSON.stringify(taskList));
}

// task list function
function listTasks() {
    list.innerHTML = '';

    for (let i = 0; i < taskList.length; i++) {
        // li add
        const li = document.createElement('li');
        li.classList.add('d-flex', 'justify-content-between');
        list.appendChild(li);

        // span One add
        const spanTaskName = document.createElement('span');
        spanTaskName.innerHTML = taskList[i];
        spanTaskName.classList.add('d-block');
        li.appendChild(spanTaskName);

        // span Two add
        const spanDelete = document.createElement('span');
        spanDelete.addEventListener('click', function() {
            taskList.splice(i, 1);
            localStorage.setItem('task', JSON.stringify(taskList));
            listTasks();
        });
        spanDelete.innerHTML = 'x';
        spanDelete.classList.add('d-block', 'px-3', 'fw-bold', 'text-secondary');
        li.appendChild(spanDelete);
    }
}

// task list
listTasks();

// New task add
function newElement() {
    if (TASK.value.trim() !== '') {
        taskList.push(TASK.value);
        localStorage.setItem('task', JSON.stringify(taskList));
        listTasks();
        TASK.value = '';
    } else {
        let live = document.querySelector('#liveToast');

        // Uyarı oluşturma ve mesaj ekleme
        let div = document.createElement('div');
        div.classList.add('me-2', 'mb-1', 'p-3', 'bg-warning');
        div.innerHTML = 'Lütfen bir görev girin.';
        live.appendChild(div);

        let span = document.createElement('span');
        span.classList.add('ps-3');
        span.innerHTML = 'x';
        span.addEventListener('click', function () {
            live.removeChild(div); // Uyarıyı kaldır
        });
        div.appendChild(span);
    }
}