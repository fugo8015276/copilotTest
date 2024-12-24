document.getElementById('myButton').addEventListener('click', function () {
    document.getElementById('message').textContent = 'ボタンがクリックされました！';
    const now = new Date();
    document.getElementById('datetime').textContent = `現在の日時: ${now.toLocaleString()}`;
});

document.getElementById('addTaskButton').addEventListener('click', function () {
    const taskText = document.getElementById('newTask').value;
    if (taskText === '') {
        alert('タスクを入力してください');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', function () {
        // タスクがクリックされたときの処理。タスクに横線が引かれる
        li.classList.toggle('completed');
    });

    document.getElementById('taskList').appendChild(li);
    document.getElementById('newTask').value = '';
});