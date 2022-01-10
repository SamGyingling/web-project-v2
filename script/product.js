
const links = document.querySelectorAll('.pagination__link');
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(link => {
            link.classList.remove('pagination__link--active');
        })
        link.classList.add('pagination__link--active');
    })
});

