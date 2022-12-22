function createGrid (size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i < size; i++) {
            const box = document.createElement('div');
            box.classList.add('gridbox');
            row.appendChild(box);
        }
        document.getElementById('grid-container').appendChild(row);
    }
}

window.addEventListener('DOMContentLoaded', function() {
    createGrid(16);
});
