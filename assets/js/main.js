(() => {

    // ADD/REMOVE CLICKED CLASS TO BURGER BARS ON CLICK //

    const dropdownContainer = document.getElementById('dropdown');
    //const burgerMenu = document.getElementById('burger-menu'); 
    const barOne = document.getElementById('bar-1');
    const barTwo = document.getElementById('bar-2');
    const barThree = document.getElementById('bar-3');

    dropdownContainer.addEventListener('click', () => {
        
        if (dropdownContainer.classList.contains('open')) {

            barOne.classList.remove('cross-container--clicked-cross-bar-1');
            barTwo.classList.remove('cross-container--clicked-cross-bar-2');
            barThree.classList.remove('cross-container--clicked-cross-bar-3');

        } else {

            barOne.classList.add('cross-container--clicked-cross-bar-1');
            barTwo.classList.add('cross-container--clicked-cross-bar-2');
            barThree.classList.add('cross-container--clicked-cross-bar-3');

        }
       
    })


})();