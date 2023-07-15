document.addEventListener('keydown', e => {
    if (e.key == "MicrophoneToggle") return
    if (document.querySelector('#batterylevel')) { //LOCKED SCREEN
        clearTimeout(screenTimeout);
        document.body.style.filter = "brightness(1)"

        screenTimeout = setTimeout(() => {
            setTimeout(() => {
                document.body.style.filter = "brightness(0)"
            }, 500)
            document.body.style.filter = "brightness(.5)"
        }, 10000)
        if (navigator.vibrate) {
            navigator.vibrate(80);
        }
        pressedKeys.push(e.key)
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            pressedKeys = [];
        }, 1000)

        e.preventDefault();
        if (pressedKeys.length == JSON.parse(localStorage.passcode).length) {
            if (checkPasscode(pressedKeys, JSON.parse(localStorage.passcode))) {
                document.body.classList.remove('locked')
                clearTimeout(screenTimeout);
                updateSoftkeys('', 'LOCK', 'Settings')
                return content.innerHTML = unlocked
            }
        }
    }
})