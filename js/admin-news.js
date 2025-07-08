// Функция для подтверждения удаления новости
function confirmDelete(newsId) {
    document.getElementById('newsIdToDelete').value = newsId;
    const deleteModal = new bootstrap.Modal(document.getElementById('deleteConfirmModal'));
    deleteModal.show();
}

// Функция для удаления новости
function deleteNews() {
    const newsId = document.getElementById('newsIdToDelete').value;
    // Здесь будет AJAX запрос на удаление новости
    console.log('Удаление новости с ID:', newsId);
    
    // Закрываем модальное окно
    const deleteModal = bootstrap.Modal.getInstance(document.getElementById('deleteConfirmModal'));
    deleteModal.hide();
    
    // Обновляем таблицу (в реальном проекте - после успешного ответа сервера)
    alert(`Новость с ID ${newsId} удалена`);
    // location.reload(); // Перезагрузка страницы после удаления
}

// Функция для сохранения новой новости
function saveNews() {
    const form = document.getElementById('addNewsForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Собираем данные формы
    const newsData = {
        title: document.getElementById('newsTitle').value,
        date: document.getElementById('newsDate').value,
        category: document.getElementById('newsCategory').value,
        content: document.getElementById('newsContent').value,
        published: document.getElementById('newsPublished').checked
    };
    
    // Здесь будет AJAX запрос на сохранение новости
    console.log('Добавление новости:', newsData);
    
    // Закрываем модальное окно
    const addModal = bootstrap.Modal.getInstance(document.getElementById('addNewsModal'));
    addModal.hide();
    
    // Очищаем форму
    form.reset();
    
    // Обновляем таблицу (в реальном проекте - после успешного ответа сервера)
    alert('Новость успешно добавлена');
    // location.reload(); // Перезагрузка страницы после добавления
}

// Функция для обновления новости
function updateNews() {
    const form = document.getElementById('editNewsForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Собираем данные формы
    const newsData = {
        id: document.getElementById('editNewsId').value,
        title: document.getElementById('editNewsTitle').value,
        date: document.getElementById('editNewsDate').value,
        category: document.getElementById('editNewsCategory').value,
        content: document.getElementById('editNewsContent').value,
        published: document.getElementById('editNewsPublished').checked
    };
    
    // Здесь будет AJAX запрос на обновление новости
    console.log('Обновление новости:', newsData);
    
    // Закрываем модальное окно
    const editModal = bootstrap.Modal.getInstance(document.getElementById('editNewsModal'));
    editModal.hide();
    
    // Обновляем таблицу (в реальном проекте - после успешного ответа сервера)
    alert('Новость успешно обновлена');
    // location.reload(); // Перезагрузка страницы после обновления
}

// Заполнение формы редактирования при открытии модального окна
document.getElementById('editNewsModal').addEventListener('show.bs.modal', function(event) {
    // В реальном проекте здесь будет AJAX запрос для получения данных новости
    const button = event.relatedTarget;
    const row = button.closest('tr');
    
    // Заполняем форму данными из строки таблицы
    document.getElementById('editNewsId').value = row.cells[0].textContent;
    document.getElementById('editNewsTitle').value = row.cells[2].textContent;
    document.getElementById('editNewsDate').value = formatDateFor