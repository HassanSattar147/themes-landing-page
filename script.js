const themeChangerBtn = document.querySelector('.theme-changer');
const contentContainer = document.querySelector('.container');


themeChangerBtn.addEventListener('click', () => {
  contentContainer.classList.toggle('dark-version')
})


