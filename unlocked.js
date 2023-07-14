document.addEventListener('keydown', e => {
    if (document.querySelector('#unlockedScreen')) { //UNLOCKED SCREEN
        if (e.key == "Enter" && document.querySelector('#settings').classList.contains('hidden')) {
            lockscreen();
        }
        if (e.key == "3" || e.key == 'SoftRight') document.querySelector('#settings').classList.toggle('hidden'), document.querySelector('.nav').focus();
    }
})