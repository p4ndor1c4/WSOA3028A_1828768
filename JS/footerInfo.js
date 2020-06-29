const icons = [
    { source: '/WSOA3028A_1828768/Images/instagram-logo.png', link: 'https://www.instagram.com/p4ndor1c4/' },
    { source: '/WSOA3028A_1828768/Images/twitter.png', link: 'https://twitter.com/p4ndor1c4' }
];

const hCardData = [
    '<p class="p-name">Grace Holton</p>',
    '<a class="u-email" href="mailto:grace.d.wanderlust@gmail.com">grace.d.wanderlust@gmail.com</a>',
    '<p class="p-locality">Johannesburg</p>',
    '<p class="p-country-name">South Africa</p>'
];

function generateFooter() {
    const footer = document.querySelector('footer');

    for (let i = 0; i < icons.length; i++) {
        const img = document.createElement('img');
        img.src = icons[i].source;
        const a = document.createElement('a');
        a.href = icons[i].link;
        a.appendChild(img);
        footer.appendChild(a);
    }

    for (let i = 0; i < hCardData.length; i++) {
        footer.innerHTML += hCardData[i];
    }

    const div = document.createElement('div');
    div.innerHTML = 'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>';
    footer.appendChild(div);
}