document.addEventListener('DOMContentLoaded', function() {
    const cancelButton = document.getElementById('cancelButton');
    const menuButton = document.getElementById('menuButton');
    menuButton.addEventListener('click', function() {
        menuButton.classList.toggle('hidden'); 
    });
});
