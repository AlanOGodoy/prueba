const selectedTheme = document.querySelector('#theme');
const body = document.querySelector('body');

selectedTheme.value = 'dark';

const initialTheme = localStorage.getItem('theme');
if (initialTheme) {
    if (initialTheme === 'dark') {
        body.classList.add('dark-theme');
    }
    if (initialTheme === 'light') {
        body.classList.remove('dark-theme');
    }
}

selectedTheme.addEventListener('change', (event) => {
    const theme = event.target.value;
    console.log(theme);

    if (theme === 'dark') {
        body.classList.add('dark-theme');
    }

    if (theme === 'light') {
        body.classList.remove('dark-theme');
    }
});
