(() => {

    // ADD/REMOVE CLICKED CLASS TO BURGER BARS ON CLICK //

    const burgerMenu = document.getElementById('dropdown'); 
    const barOne = document.getElementById('bar-1');
    const barTwo = document.getElementById('bar-2');
    const barThree = document.getElementById('bar-3');

    burgerMenu.addEventListener('click', () => {

        if (burgerMenu.classList.contains('open')) {

            barOne.classList.remove('cross-container--clicked-cross-bar-1');
            barTwo.classList.remove('cross-container--clicked-cross-bar-2');
            barThree.classList.remove('cross-container--clicked-cross-bar-3');

        } else if (console.log(burgerMenu.classList.contains('open')) == false) {

            barOne.classList.add('cross-container--clicked-cross-bar-1');
            barTwo.classList.add('cross-container--clicked-cross-bar-2');
            barThree.classList.add('cross-container--clicked-cross-bar-3');

        }

    });

})();