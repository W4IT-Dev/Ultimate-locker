//DOM
const content = document.querySelector('#content')

// HTML
const lockedscreen = `
<p id="batterylevel">x%</p>
<h2>Screen is locked</h2>
<p>Input passcode to unlock</p>
`
const unlocked = `<h2 id="unlockedScreen">Screen is unlocked</h2>`;

//SOFTKEYS
const left = document.querySelector('#left')
const middle = document.querySelector('#middle')
const right = document.querySelector('#right')

//OTHER VARS
let pressedKeys = []
let timeout, screenTimeout;

if (!localStorage.passcode) {
    content.innerHTML = `<h3 id="firstuse">Welcome to Phone locker</h3>
    <p>This app lets you lock your phone so nobody can get in, or anything happens by accident</p>
    <p>You will be able to unlock your phone with a chosen key combination</p>
    <p id="keycombi" class="primary">Please enter your key combination</p>`
} else {
    content.innerHTML = unlocked;
    updateSoftkeys('', 'LOCK', 'Settings')
}



// getKaiAd({
//     publisher: 'fe2d9134-74be-48d8-83b9-96f6d803efef',
//     app: 'phonelocker',
//     test: 1,
//     onerror: err => console.error('error getting ad: ', err),
//     onready: ad => {
//         ad.call('display')
//     }
// })

wakelock = navigator.requestWakeLock('screen');

let lockscreenenabled = navigator.mozSettings.createLock().get('lockscreen.enabled')
let a = navigator.mozSettings.createLock().get('lockscreen.passcode-lock.enabled')

lockscreenenabled.onsuccess = function () {

    console.log(this.result)
    alert(this.result)
};

lockscreenenabled.onerror = function (){
    console.log(this.result)
    alert(this.result)
    console.log(this.error)
    alert(this.error)
}


navigator.mozSettings.createLock().set({ 'lockscreen.enabled': false });