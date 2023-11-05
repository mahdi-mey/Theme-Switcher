const themeOptions = document.querySelectorAll('.theme-selector input[type="radio"]')

themeOptions.forEach(themeBtn => {
    themeBtn.addEventListener('click', (e) => {
        let dataTheme = e.target.dataset.theme

        document.body.className = dataTheme 

        saveThemeInLocalStorage(dataTheme)
    })
})

function saveThemeInLocalStorage(bodyTheme){
    localStorage.setItem('theme', bodyTheme)
}

window.addEventListener('load', () => {
    let storedTheme = localStorage.getItem('theme')
    document.body.className = storedTheme;
    document.querySelector(`#${storedTheme}`).checked = true;
})