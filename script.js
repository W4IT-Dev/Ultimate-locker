const lockedscreen = `
<p id="batterylevel">x%</p>
<h2>Screen is locked</h2>
<p>Input passcode to unlock</p>
`
const unlocked = `<h2 id="unlockedScreen">Screen is unlocked</h2>`;

const left = document.querySelector('#left')
const middle = document.querySelector('#middle')
const right = document.querySelector('#right')
localStorage.passcode = JSON.stringify(['Enter'])
let pressedKeys = []

let timeout;
if (!localStorage.passcode) {
    console.log('please input passcode')
}
let locked = 1;
if (locked) lockscreen();



function checkPasscode(a, b) {
    if (a === b) return true;
    if (!a || !b) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) {
            alert('nope'), pressedKeys = []
            return false

        };
    }
    return true;
}

function updateSoftkeys(a, b, c) {
    a ? left.innerText = a : left.innerText = ''
    b ? middle.innerText = b : middle.innerText = ''
    c ? right.innerText = c : right.innerText = ''
}

function lockscreen() {
    pressedKeys = [];
    document.querySelector('#content').innerHTML = lockedscreen;
    updateSoftkeys('SOS');
    navigator.getBattery().then((battery) => {
        document.querySelector('#batterylevel').innerText = battery.level * 100 + '%'
        battery.addEventListener("levelchange", () => {
            document.querySelector('#batterylevel').innerText = battery.level * 100 + '%'
        })
    })
}

getKaiAd({
	publisher: 'fe2d9134-74be-48d8-83b9-96f6d803efef',
	app: 'phonelocker',
	onerror: err => console.error('error getting ad: ', err),
	onready: ad => {
		ad.call('display')
	}
})
	
