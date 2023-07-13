document.addEventListener('keydown', e => {
    console.log(e.key)
    if (document.querySelector('#batterylevel')) {
        pressedKeys.push(e.key)
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            pressedKeys = [];
        }, 2000)

        e.preventDefault();
        if (pressedKeys.length == JSON.parse(localStorage.passcode).length) {
            if (checkPasscode(pressedKeys, JSON.parse(localStorage.passcode))) {
                alert('Screen unlocked')
                updateSoftkeys('', 'LOCK', 'Settings')
                return document.querySelector('#content').innerHTML = unlocked
            }
        }
    }
    if (!document.querySelector('#settings').classList.contains('hidden') && e.key == "Enter") {
        const id = document.activeElement.id
        if (id == 'changeCode') return changeCode()
        if (id == 'sosbuttonchange') return changesosbutton();
        if (id == 'allowednumbers') return allowednumbers();

    }
    if (document.querySelector('#unlockedScreen')) {
        if (e.key == "Enter") {
            lockscreen();
        }
        if (e.key == "3" || e.key == 3) document.querySelector('#settings').classList.remove('hidden'), document.querySelector('.nav').focus();
    }
})

window.onerror = (a, b, c, d, e) => {
    console.log(`message: ${a}`);
    console.log(`source: ${b}`);
    console.log(`lineno: ${c}`);
    console.log(`colno: ${d}`);
    console.log(`error: ${e}`);

    return true;
};