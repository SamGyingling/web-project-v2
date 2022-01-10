const overlay = document.getElementById('overlay');
const body = document.querySelector('body');
window.addEventListener('click', e => {
    const isdropDownBtn = e.target.matches('[data-dropdown-button]');
    if (!isdropDownBtn && e.target.closest('[data-dropdown]') != null)
        return;
    let currentDropDown;
    if (isdropDownBtn) {
        currentDropDown = e.target.closest('[data-dropdown]');
        if (currentDropDown.dataset.dropdown === 'menu') {
            currentDropDown.classList.add('menu--active');
            overlay.classList.add('overlay--active');
            body.classList.add('body--deactive');
        }
        if (currentDropDown.dataset.dropdown === 'sort' ) {
            currentDropDown.classList.toggle('collection__sort--active');
            body.classList.toggle('body--deactive');
            if(document.body.offsetWidth<1000){
                overlay.classList.toggle('overlay--active');
            }
        }
    }
    document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
        if (dropdown === currentDropDown) return;
        if (dropdown.classList.contains('collection__sort--active')) {
            dropdown.classList.remove('collection__sort--active');
            overlay.classList.remove('overlay--active');
            body.classList.remove('body--deactive');
        }
        if (dropdown.classList.contains('menu--active')) {
            dropdown.classList.remove('menu--active');
            overlay.classList.remove('overlay--active');
            body.classList.remove('body--deactive');
        }
    })
    const closeBtns = document.querySelectorAll('[data-close-btn]');
    closeBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            let dropdown = e.target.closest('[data-dropdown]');
            if (dropdown.classList.contains('menu--active')) {
                dropdown.classList.remove('menu--active');
                overlay.classList.remove('overlay--active');
                body.classList.remove('body--deactive');
            }
            if (dropdown.classList.contains('collection__sort--active')) {
                dropdown.classList.remove('collection__sort--active');
                overlay.classList.remove('overlay--active');
                body.classList.remove('body--deactive');
            }
        })
    })
})
    // document.querySelectorAll('[data-dropdown].menu--active').forEach(item => {
    //     if (item === currentDropDown) return;
    //     item.classList.remove('menu--active');

    // })
    // document.querySelectorAll('[data-dropdown].collection__sort--active').forEach(item => {
    //     if (item === currentDropDown) return;
    //     item.classList.remove('collection__sort--active');

    // })


