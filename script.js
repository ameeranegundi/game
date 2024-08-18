document.addEventListener('DOMContentLoaded', () => {
    const randomTile = document.getElementById('random-img');

    // Generate a random image for the random tile
    const randomIndex = Math.floor(Math.random() * 64) + 1;
    randomTile.src = `character (${randomIndex}).png`;
    console.log(`Random image set to character (${randomIndex}).png`);
});