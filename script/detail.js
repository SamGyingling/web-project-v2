const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const quantity = document.getElementById('quantity');
plus.addEventListener('click', ()=> {
    if (quantity.innerHTML < 10) {
        quantity.innerHTML++;
    }
});
minus.addEventListener('click', ()=> {
    if (quantity.innerHTML > 1) {
        quantity.innerHTML--;
    }
});

