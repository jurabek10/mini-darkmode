const elDarkMode = document.querySelector('.site-header-dark');

elDarkMode.addEventListener('click', function () {
    document.body.classList.add('dark-mode');
});

const elLightMode = document.querySelector('.site-header-light');

elLightMode.addEventListener('click', function () {
    document.body.classList.remove('dark-mode');
});