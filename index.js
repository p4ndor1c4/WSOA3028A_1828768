const button = document.body.children[1];
button.addEventListener('click', function () {
    const colour = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
    document.body.style.backgroundColor = colour;
});