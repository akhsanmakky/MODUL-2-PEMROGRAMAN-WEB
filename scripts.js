document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Fungsi untuk menambahkan tugas baru
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const newTask = document.createElement('li');
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '🗑️ Hapus';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(newTask);
            });

            // Tandai tugas selesai jika diklik
            taskSpan.addEventListener('click', () => {
                taskSpan.classList.toggle('completed');
            });

            newTask.appendChild(taskSpan);
            newTask.appendChild(deleteButton);
            taskList.appendChild(newTask);

            taskInput.value = "";  // Kosongkan input setelah menambahkan
        } else {
            alert("Masukkan tugas terlebih dahulu!");
        }
    });
});
