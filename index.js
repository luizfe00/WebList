const userForm = document.querySelector('#userForm')
const bookForm = document.querySelector('#bookForm')
const user = document.querySelector('#user')
const book = document.querySelector('#book')


userForm.addEventListener('submit', userSubmit)
bookForm.addEventListener('submit', bookSubmit)


function userSubmit(e) {
    e.preventDefault()

    console.log(user.value)
}


function bookSubmit(e) {
    e.preventDefault()

    console.log(book.value)
}