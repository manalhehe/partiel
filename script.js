const btn = document.getElementById('btnChange');
const img = document.getElementById('imageTest');

btn.addEventListener('click', () => {
    // Exemple simple : change la source vers une autre image dans pics (à ajouter)
    if (img.src.includes('example.jpg')) {
        img.src = 'pics/example2.jpg';
    } else {
        img.src = 'pics/example.jpg';
    }
});
