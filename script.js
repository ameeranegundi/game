document.addEventListener('DOMContentLoaded', () => {
    const tiles = document.querySelectorAll('.tile');

    // Set up click event for each tile
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            const img = tile.querySelector('img');
            img.style.opacity = '0';  // Hide the image
            tile.style.backgroundColor = 'black';  // Set background color to black
        });
    });

    // Generate a random image for the random tile
    const randomTile = document.getElementById('random-img');
    const randomIndex = Math.floor(Math.random() * 64) + 1;
    randomTile.src = `character (${randomIndex}).png`;
});