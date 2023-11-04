const themeOptions = document.querySelectorAll('.theme-selector input[type="radio"]')

themeOptions.forEach(themeBtn => {
    themeBtn.addEventListener('click', (e) => {
        document.body.className = e.target.dataset.theme 
    })
})