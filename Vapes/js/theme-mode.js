const selectedTheme = document.querySelector('#theme');
const body = document.querySelector('body');

// 1) leer guardado o usar 'light' por defecto
const saved = localStorage.getItem('theme');
if (saved) {
  selectedTheme.value = saved;        // sincroniza el select
}

// 2) aplicar en el arranque
applyTheme(selectedTheme.value || 'light');

selectedTheme.addEventListener('change', (event) => {
  const theme = event.target.value;
  applyTheme(theme);
  localStorage.setItem('theme', theme);
});

function applyTheme(theme) {
  body.classList.toggle('dark-theme', theme === 'dark');
}
