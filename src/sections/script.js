document.addEventListener('DOMContentLoaded', function() {
    const cancelButton = document.getElementById('cancelButton');
    const menuButton = document.getElementById('menuButton');

    menuButton.addEventListener('click', function() {
        menuButton.classList.add('hidden');
        cancelButton.classList.remove('hidden');
    });

    cancelButton.addEventListener('click', function() {
        cancelButton.classList.add('hidden');
        menuButton.classList.remove('hidden');
    });
});