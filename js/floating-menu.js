let menu_open = false;
const menuShow = () => {
    const lista = document.getElementById('menu__list');
    if (menu_open) {
        lista.classList.remove('menu__list__show');
    } else {
        lista.classList.add('menu__list__show')
    }
    menu_open = !menu_open;
}