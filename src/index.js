const indexPage = document.querySelector('.index-page')
const bookmarkPage = document.querySelector('.bookmark-page')
const formPage = document.querySelector('.form-page')
const profilePage = document.querySelector('.profile-page')

const buttonIndex = document.querySelector('.button-index')
const buttonBookmark = document.querySelector('.button-bookmark')
const buttonForm = document.querySelector('.button-form')
const buttonProfile = document.querySelector('.button-profile')

buttonIndex.addEventListener('click', () => {
  indexPage.classList.remove('hidden')
  bookmarkPage.classList.add('hidden')
  formPage.classList.add('hidden')
  profilePage.classList.add('hidden')

  buttonIndex.classList.add('active')
  buttonBookmark.classList.remove('active')
  buttonForm.classList.remove('active')
  buttonProfile.classList.remove('active')
})
buttonBookmark.addEventListener('click', () => {
  indexPage.classList.add('hidden')
  bookmarkPage.classList.remove('hidden')
  formPage.classList.add('hidden')
  profilePage.classList.add('hidden')

  buttonIndex.classList.remove('active')
  buttonBookmark.classList.add('active')
  buttonForm.classList.remove('active')
  buttonProfile.classList.remove('active')
})
buttonForm.addEventListener('click', () => {
  indexPage.classList.add('hidden')
  bookmarkPage.classList.add('hidden')
  formPage.classList.remove('hidden')
  profilePage.classList.add('hidden')

  buttonIndex.classList.remove('active')
  buttonBookmark.classList.remove('active')
  buttonForm.classList.add('active')
  buttonProfile.classList.remove('active')
})
buttonProfile.addEventListener('click', () => {
  indexPage.classList.add('hidden')
  bookmarkPage.classList.add('hidden')
  formPage.classList.add('hidden')
  profilePage.classList.remove('hidden')

  buttonIndex.classList.remove('active')
  buttonBookmark.classList.remove('active')
  buttonForm.classList.remove('active')
  buttonProfile.classList.add('active')
})

const bookmark = document.querySelector('.quiz-card__bookmark')

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('quiz-card__bookmark--selected')
})

const buttonAnswer = document.querySelector('.quiz-card__button')
const answer = document.querySelector('.quiz-card__answer')

buttonAnswer.addEventListener('click', () => {
  answer.classList.toggle('hidden')
})
