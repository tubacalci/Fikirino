document.addEventListener('DOMContentLoaded', () => {
    const progress = document.querySelector('.progress');
    const occupancyValue = 80; // Bu değer dinamik bir API'den gelebilir

    // Doluluk oranı genişliğini ayarla
    progress.style.width = occupancyValue + '%';

    // Doluluk oranına göre renk değiştir
    if (occupancyValue <= 50) {
        progress.style.backgroundColor = '#2ecc71'; // Yeşil
    } else if (occupancyValue <= 80) {
        progress.style.backgroundColor = '#f1c40f'; // Sarı
    } else {
        progress.style.backgroundColor = '#e74c3c'; // Kırmızı
    }
});