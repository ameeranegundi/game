document.addEventListener('DOMContentLoaded', () => {
    const tiles = document.querySelectorAll('.tile');

    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            console.log('Tile clicked'); // This will log a message when a tile is clicked
            const cross = tile.querySelector('.cross');
            cross.classList.toggle('show');
        });
    });
});