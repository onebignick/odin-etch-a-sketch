function createGrid (size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i < size; i++) {
            const box = document.createElement('div');
            box.classList.add('gridbox');
            box.classList.add('gridbox-none');
            box.addEventListener("mouseover", function(event) {
                if (mouseDown === true) {
                    if (box.classList.contains('gridbox-none')) {
                        box.classList.remove('gridbox-none');
                        box.classList.add('gridbox-one');
                    } else if (box.classList.contains('gridbox-one')) {
                        box.classList.remove('gridbox-one');
                        box.classList.add('gridbox-two');
                    } else if (box.classList.contains('gridbox-two')) {
                        box.classList.remove('gridbox-two');
                        box.classList.add('gridbox-three');
                    } else if (box.classList.contains('gridbox-three')) {
                        box.classList.remove('gridbox-three');
                        box.classList.add('gridbox-four');
                    } else if (box.classList.contains('gridbox-four')) {
                        box.classList.remove('gridbox-four');
                        box.classList.add('gridbox-five');
                    } else {
                        // pass
                    }
                } else {
                    // pass
                }
            });
            row.appendChild(box);
        }
        document.getElementById('grid-container').appendChild(row);
    }
}

window.addEventListener('DOMContentLoaded', function() {
    createGrid(16);
});

let mouseDown = false;

window.addEventListener('mousedown', function() {
    mouseDown = true;
})

window.addEventListener('mouseup', function() {
    mouseDown = false
})
