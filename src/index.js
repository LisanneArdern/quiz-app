const indexPage = document.querySelector('.index-page')
const bookmarkPage = document.querySelector('.bookmark-page')
const formPage = document.querySelector('.form-page')
const profilePage = document.querySelector('.profile-page')

const header = document.querySelector('[data-header]')

const buttonIndex = document.querySelector('.button-index')
const buttonBookmark = document.querySelector('.button-bookmark')
const buttonForm = document.querySelector('.button-form')
const buttonProfile = document.querySelector('.button-profile')

buttonIndex.addEventListener('click', () => {
  header.innerText = 'QuizApp'

  changePages(indexPage)
  selectButton(buttonIndex)
})
buttonBookmark.addEventListener('click', () => {
  header.innerText = 'Bookmarks'

  changePages(bookmarkPage)
  selectButton(buttonBookmark)
})
buttonForm.addEventListener('click', () => {
  header.innerText = 'Create'

  changePages(formPage)
  selectButton(buttonForm)
})
buttonProfile.addEventListener('click', () => {
  header.innerText = 'Profile'

  changePages(profilePage)
  selectButton(buttonProfile)
})

function selectButton(button) {
  deactivateButtons()
  button.classList.add('active')
}
function deactivateButtons() {
  buttonIndex.classList.remove('active')
  buttonBookmark.classList.remove('active')
  buttonForm.classList.remove('active')
  buttonProfile.classList.remove('active')
}

function changePages(page) {
  hideAllPages()
  page.classList.remove('hidden')
}

function hideAllPages() {
  indexPage.classList.add('hidden')
  bookmarkPage.classList.add('hidden')
  formPage.classList.add('hidden')
  profilePage.classList.add('hidden')
}

const bookmark = document.querySelector('.quiz-card__bookmark')

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('quiz-card__bookmark--selected')
})

const buttonAnswer = document.querySelector('.quiz-card__button')
const answer = document.querySelector('.quiz-card__answer')

buttonAnswer.addEventListener('click', () => {
  answer.classList.toggle('hidden')
})
