document.addEventListener('DOMContentLoaded', () => {
    const progress = document.querySelector('.progress');
    const occupancyValue = 80; // Bu değer dinamik bir API'den gelebilir
    const submitSymptomBtn = document.querySelector('.submit-symptom');
    const symptomInput = document.querySelector('.symptom-input');
    const symptomList = document.querySelector('.symptom-list');

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

    // Semptom ekleme fonksiyonu
    submitSymptomBtn.addEventListener('click', () => {
        const symptoms = symptomInput.value.trim();
        if (symptoms) {
            const li = document.createElement('li');
            li.textContent = symptoms;
            symptomList.appendChild(li);
            symptomInput.value = ''; // Giriş alanını temizle
        } else {
            alert('Lütfen bir semptom girin!');
        }
    });
});