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

function clear() {
    let parent = document.getElementById('grid-container');
    for (const child of parent.children) {
        for (const box of child.children) {
            box.removeAttribute('class');
            box.classList.add('gridbox');
            box.classList.add('gridbox-none');
        }
    }
}

function resize() {
    let input = prompt('Enter size of grid here: ');
    let box = document.getElementById('grid-container');
    console.log(box);
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }
    createGrid(input)
}

window.addEventListener('DOMContentLoaded', function() {
    createGrid(16);
    let clear_btn = document.getElementById('clear-btn');
    let size_btn = document.getElementById('size-btn');

    clear_btn.onclick = clear;
    size_btn.onclick = resize;
});

let mouseDown = false;

window.addEventListener('mousedown', function() {
    mouseDown = true;
})

window.addEventListener('mouseup', function() {
    mouseDown = false
})
