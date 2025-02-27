document.addEventListener('DOMContentLoaded', () => {
    const userNameSpan = document.getElementById('user-name');
    const continueBtn = document.getElementById('continue-btn');

    // Örnek bir isim (gerçek bir uygulamada bu kullanıcıdan alınabilir)
    const userName = "Ahmet"; // Bunu dinamik yapabiliriz
    userNameSpan.textContent = userName;

    continueBtn.addEventListener('click', () => {
        window.location.href = 'hospital.html';
    });
});