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

    // タスクを完了としてマークする機能
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    // 削除ボタンを作成
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', function () {
        li.remove();
    });

    // タスクに削除ボタンを追加
    li.appendChild(deleteButton);

    document.getElementById('taskList').appendChild(li);
    document.getElementById('newTask').value = '';
});