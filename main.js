let lastLis = document.querySelectorAll(`ul > li:last-of-type`);
lastLis.forEach(li => li.classList.add(`last`));

const ulRoot = document.querySelector(`ul.root`);

function setFirstItemClassName(level, ul = ulRoot) {
    level--;
    if (level > 0) {
        const LIs = [...ul.children];
        LIs.forEach(LI => {
            let InnerULs = [...LI.children];
            InnerULs.forEach(InnerUL => setFirstItemClassName(level, InnerUL))
        });
    } else {
        let LiFirst = ul.querySelector(`li:first-of-type`);
        LiFirst.classList.add(`first`);
    }
}

setFirstItemClassName(2);

// function setFirstItemClassName(level) {
//     let deep = ``;
//     for (let i = 1; i < level; i++) {
//         deep += `> li > ul`
//     }
//     let lis = document.querySelectorAll(`ul.root ${deep} > li:first-child`);
//     lis.forEach(li => li.classList.add('first'));
// }