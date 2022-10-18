let lastLis = document.querySelectorAll(`ul > li:last-of-type`);
lastLis.forEach(li => li.classList.add(`last`));

function setFirstItemClassName(level) {
    let deep = ``;
    for (let i = 1; i < level; i++) {
        deep += `> li > ul`
    }
    let lis = document.querySelectorAll(`ul.root ${deep} > li:first-child`);
    lis.forEach(li => li.classList.add('first'));
}

setFirstItemClassName(2);