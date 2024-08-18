document.addEventListener('DOMContentLoaded', () => {
    const tiles = document.querySelectorAll('.tile');

    // Set up click event for each tile
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            const cross = tile.querySelector('.cross');
            cross.classList.toggle('show');
        });

        // Handle touch events for mobile devices
        tile.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Prevent default touch behavior
            const cross = tile.querySelector('.cross');
            cross.classList.toggle('show');
        });
    });

    // Generate a random image for the random tile
    const randomTile = document.getElementById('random-img');
    const randomIndex = Math.floor(Math.random() * 64) + 1;
    randomTile.src = `character (${randomIndex}).png`;
});