let grid = document.querySelector('div.grid')
let gridSize = document.querySelector('.grid-size')
let gridValue = document.querySelector('.grid-size-display')
let gridDim = parseFloat(getComputedStyle(grid,null).getPropertyValue('height'))
let boxes = document.querySelectorAll('.box')
let resetBtn = document.querySelector('.reset')
let applyBtn = document.querySelector('.apply')

let squareSize = gridSize.value
gridValue.textContent = `${squareSize} x ${squareSize}`

createGrid(parseInt(gridValue.textContent))

function sizingBoxes(size) {
    document.querySelectorAll('.box').forEach(item => {
        item.style.width = `${gridDim/size}px`
        item.style.height = `${gridDim/size}px`
        console.log(item.clientWidth)
    })
}

function createGrid(size) {
    for (let i = 0; i<size; i++){
        for(let j =0; j<size; j++){
            let div = document.createElement('div')
            div.classList.add('box')
            grid.appendChild(div)
        }
    }
    console.log('hello')
    sizingBoxes(size)

}


function reset(){
    while(grid.firstChild){
        grid.firstChild.remove()
    }
    createGrid(parseInt(gridValue.textContent))
}

grid.addEventListener('mouseover', function (e) {
    // Add the "active" class to only divs with a "box" class
    if (e.target.matches('.box')) {
      e.target.classList.add('active');
    }
});

gridSize.addEventListener('input', function (e) {
    squareSize = e.target.value;
    gridValue.textContent = `${squareSize}x${squareSize}`;
});


resetBtn.addEventListener('click',reset)
applyBtn.addEventListener('click',reset)