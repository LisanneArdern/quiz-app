const indexPage = getElement('.index-page')
const bookmarkPage = getElement('.bookmark-page')
const formPage = getElement('.form-page')
const profilePage = getElement('.profile-page')

const header = getElement('[data-header]')

const buttonIndex = getElement('.button-index')
const buttonBookmark = getElement('.button-bookmark')
const buttonForm = getElement('.button-form')
const buttonProfile = getElement('.button-profile')

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

const bookmark = getElement('.quiz-card__bookmark')

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('quiz-card__bookmark--selected')
})

const buttonAnswer = getElement('.quiz-card__button')
const answer = getElement('.quiz-card__answer')

buttonAnswer.addEventListener('click', () => {
  answer.classList.toggle('hidden')
})

function getElement(selector) {
  return document.querySelector(selector)
}

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
