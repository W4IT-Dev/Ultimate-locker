document.addEventListener('keydown', e => {

    if (document.querySelector('#batterylevel')) { //LOCKED SCREEN
        if (navigator.vibrate) {
            navigator.vibrate(80);
        }
        if (e.key == sosbutton) return call();
        pressedKeys.push(e.key)
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            pressedKeys = [];
        }, 1000)

        e.preventDefault();
        if (pressedKeys.length == JSON.parse(localStorage.passcode).length) {
            if (checkPasscode(pressedKeys, JSON.parse(localStorage.passcode))) {
                document.body.classList.remove('locked')

                updateSoftkeys('', 'LOCK', 'Settings')
                return content.innerHTML = unlocked
            }
        }
    }
})