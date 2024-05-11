const mobileNav = () => {
    const barsBtn = document.querySelector('#bars-btn');
    const mobileNav = document.querySelector('#mobile-nav');
    const barsCloseBtn = document.querySelector('#bars-close-btn')

    const handleBarsBtn = () => (mobileNav.style.display = 'flex');
    const handleBarsCloseBtn = () => (mobileNav.style.display = 'none');

    barsBtn.addEventListener('click', handleBarsBtn);
    barsCloseBtn.addEventListener('click', handleBarsCloseBtn);
};

export default mobileNav;
