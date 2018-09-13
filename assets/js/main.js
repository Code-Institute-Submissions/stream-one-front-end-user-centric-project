(() => {

    // ADD/REMOVE CLICKED CLASS TO BURGER BARS ON CLICK //

    const burgerMenu = document.getElementById('dropdown'); 
    const barOne = document.getElementById('bar-1');
    const barTwo = document.getElementById('bar-2');
    const barThree = document.getElementById('bar-3');


    burgerMenu.addEventListener('click', function() {
        console.log('click');
        if (burgerMenu.classList.contains('open') == true) {
            console.log(true);
            barOne.classList.remove('cross-container--clicked-cross-bar-1');
            barTwo.classList.remove('cross-container--clicked-cross-bar-2');
            barThree.classList.remove('cross-container--clicked-cross-bar-3');

        }
        
        if (burgerMenu.classList.contains('open') == false) {

            console.log(false);
            barOne.classList.add('cross-container--clicked-cross-bar-1');
            barTwo.classList.add('cross-container--clicked-cross-bar-2');
            barThree.classList.add('cross-container--clicked-cross-bar-3');

        }

    });

})();