// Toggle between light and dark themes
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Function to manage team (this can be expanded for more complex behavior)
document.querySelectorAll('.add-player').forEach(button => {
    button.addEventListener('click', () => {
        alert('Player added to your team!');
    });
});
