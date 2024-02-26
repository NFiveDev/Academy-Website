function ToggleNav(open) {

    const navEl = document.querySelector('#navigation');
    const activeCls = 'nav-active';

    if(open) {
        navEl.classList.add(activeCls);
    } else {
        navEl.classList.remove(activeCls);
    }
}