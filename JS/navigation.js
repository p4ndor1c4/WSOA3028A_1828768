const navData = [
    {title: 'Home', link: '/'},
    {title: 'About Me', link: '/About'},
    {title: 'Blog', link: '/Blog'},
    {title: 'Bucket List', link: '/BucketList'}
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