const navData = [
    {title: 'Home', link: '/WSOA3028A_1828768/'},
    {title: 'About Me', link: '/WSOA3028A_1828768/About'},
    {title: 'Blog', link: '/WSOA3028A_1828768/Blog'},
    {title: 'Bucket List', link: '/WSOA3028A_1828768/BucketList'}
];

function initialiseNavigation(){
    const nav = document.querySelector('nav');

    const ul = document.createElement('ul');

    for (let i = 0; i < navData.length; i++)
    {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerText = navData[i].title;
        a.href = navData[i].link;
        li.appendChild(a);
        ul.appendChild(li);
    }

    nav.appendChild(ul);
};