document.addEventListener('DOMContentLoaded', () => {
    const videoCloud = document.getElementById('video-cloud');
    let rotationX = 0;
    let rotationY = 0;
    
    // Обработчик движения мыши
    videoCloud.addEventListener('mousemove', (event) => {
        const rect = event.target.getBoundingClientRect();
        rotationX = -(event.clientY - rect.top - rect.height / 2) * 0.02; // Увеличение скорости вращения по оси X
        rotationY = (event.clientX - rect.left - rect.width / 2) * 0.005; // Уменьшение скорости вращения по оси Y
        videoCloud.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    });

    // Обработчик кликов по элементам
    videoCloud.querySelectorAll('.video-item').forEach(item => {
        item.addEventListener('click', () => {
            const url = item.dataset.videoUrl;
            window.open(url, '_blank'); // Откроет видео в новой вкладке
        });
    });
});
