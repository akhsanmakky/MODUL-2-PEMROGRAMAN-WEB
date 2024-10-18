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

            // Tombol Hapus
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '🗑️ Hapus';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(newTask);
            });

            // Tombol Edit
            const editButton = document.createElement('button');
            editButton.textContent = '✏️ Edit';
            editButton.classList.add('edit-btn');
            editButton.addEventListener('click', () => {
                const newTaskText = prompt('Edit tugas:', taskSpan.textContent);
                if (newTaskText !== null && newTaskText.trim() !== "") {
                    taskSpan.textContent = newTaskText.trim();
                } else if (newTaskText.trim() === "") {
                    alert("Teks tugas tidak boleh kosong!");
                }
            });

            // Tandai tugas selesai jika diklik
            taskSpan.addEventListener('click', () => {
                taskSpan.classList.toggle('completed');
            });

            newTask.appendChild(taskSpan);
            newTask.appendChild(editButton);  // Tambahkan tombol Edit
            newTask.appendChild(deleteButton);
            taskList.appendChild(newTask);

            taskInput.value = "";  // Kosongkan input setelah menambahkan
        } else {
            alert("Masukkan tugas terlebih dahulu!");
        }
    });
});
