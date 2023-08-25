const themeBtn = document.querySelector('.theme-changer');
const themeBtn2 = document.querySelector('.theme-change-btn');
const contentContainer = document.querySelector('.container');


themeBtn.addEventListener('click', () => {
  contentContainer.classList.toggle('dark-version')
})

themeBtn2.addEventListener('click', () => {
  contentContainer.classList.toggle('dark-version')
})


