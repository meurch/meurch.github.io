// script.js
document.addEventListener("DOMContentLoaded", () => {
    const videoCloud = document.getElementById("video-cloud");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const videoFrame = document.getElementById("video-frame");

    // Функция для открытия модального окна и загрузки видео
    function openModal(videoId) {
        modal.classList.remove("hidden");
        videoFrame.src = `https://rutube.ru/play/embed/${videoId}`;
    }

    // Функция для закрытия модального окна
    function closeModal() {
        modal.classList.add("hidden");
        videoFrame.src = "";
    }

    // Обработчик события для кнопки закрытия
    closeButton.addEventListener("click", closeModal);

    // Обработчики событий для всех кнопок видео
    videoCloud.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            const videoId = button.dataset.videoId;
            openModal(videoId);
        });
    });
});
