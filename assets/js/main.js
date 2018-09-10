(() => {

    // ADD/REMOVE CLICKED CLASS TO BURGER BARS ON CLICK //

    const burgerMenu = document.getElementById('burger-menu'); 
    const barOne = document.getElementById('bar-1');
    const barTwo = document.getElementById('bar-2');

    burgerMenu.addEventListener('click', () => {
        
        if (barOne.classList.contains('cross-container--clicked-cross-bar-1')) {

            barOne.classList.remove('cross-container--clicked-cross-bar-1');
            barTwo.classList.remove('cross-container--clicked-cross-bar-2');

        } else {

            barOne.classList.add('cross-container--clicked-cross-bar-1');
            barTwo.classList.add('cross-container--clicked-cross-bar-2');

        }
       
    })


})();