const themeBtn = document.querySelector('.theme-changer');
const contentContainer = document.querySelector('.container');

const toggleDarkTheme = () => {
  contentContainer.classList.toggle('dark-version')
}


themeBtn.addEventListener('click', toggleDarkTheme)

