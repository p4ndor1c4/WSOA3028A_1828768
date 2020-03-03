const button = document.body.children[1];
button.addEventListener('click', function () {
    const colour = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = colour;
});