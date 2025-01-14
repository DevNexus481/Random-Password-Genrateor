const generateBtn = document.getElementById('generateBtn');
const resetBtn = document.getElementById('resetBtn');
const passwordField = document.getElementById('password');
const themeToggle = document.getElementById('theme-toggle');

// Generate Password button event listener
generateBtn.addEventListener('click', generatePassword);

// Reset button event listener
resetBtn.addEventListener('click', resetPassword);

// Theme toggle event listener
themeToggle.addEventListener('change', toggleTheme);

// Function to generate a random password
function generatePassword() {
    const length = 16; // Password length
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    passwordField.value = password;
}

// Function to reset the password field
function resetPassword() {
    passwordField.value = '';
}

// Function to toggle between dark and light modes
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}