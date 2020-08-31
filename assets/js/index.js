const container = document.querySelector('.container-column');
for (let i = 0; i <= 1; i++) {
    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'container-row');
    container.appendChild(divRow);
}

const rows = document.querySelectorAll(".container-row");
let j = 0;
for (let row of rows) {
    for (let k = 0; k <= 2; k++) {
        let img = document.createElement('img');
        img.setAttribute('src', './assets/images/p' + j++ + '.png');
        img.setAttribute('class', 'img-partner card');
        row.appendChild(img);
    }
}

const partners = document.querySelectorAll(".img-partner");
for (let partner of partners) {
    partner.addEventListener('mouseover', function (event) {
        event.target.classList.toggle("shadow");
    });
    partner.addEventListener('mouseout', function (event) {
        event.target.classList.remove("shadow");
    });
}