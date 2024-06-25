// Плавный переход на другую страницу
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.fade-in').classList.add('fade-in-finish');
    }, 50);
});
