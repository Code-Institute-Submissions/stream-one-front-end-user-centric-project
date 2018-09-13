(() => {

    // ADD/REMOVE CLICKED STYLES TO BURGER BARS ON MENU ICON CLICK //

    const burgerMenu = document.getElementById('dropdown'); 
    const barOne = document.getElementById('bar-1');
    const barTwo = document.getElementById('bar-2');
    const barThree = document.getElementById('bar-3');


    burgerMenu.addEventListener('click', () => {
       
        barOne.classList.toggle('cross-container--clicked-cross-bar-1');
        barTwo.classList.toggle('cross-container--clicked-cross-bar-2');
        barThree.classList.toggle('cross-container--clicked-cross-bar-3');
        
    });

})();