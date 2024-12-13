function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.src = 'https://img.icons8.com/ios-filled/50/000000/invisible.png';
    } else {
        passwordInput.type = 'password';
        toggleIcon.src = 'https://img.icons8.com/ios-filled/50/000000/visible.png';
    }
}