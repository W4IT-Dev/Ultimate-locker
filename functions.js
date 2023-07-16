function checkPasscode(a, b) {
    if (a === b) return true;
    if (!a || !b) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) {
            if (navigator.vibrate) {
                navigator.vibrate(300);
            }
            pressedKeys = []
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
    screenTimeout = setTimeout(() => {
        setTimeout(() => {
            document.body.style.filter = "brightness(0)"
            setTimeout(() => {
                if (navigator.mozPower) navigator.mozPower.screenEnabled = false
                else alert('mozpower not there :(')
            }, 500)
        }, 500)
        document.body.style.filter = "brightness(.5)"
    }, 10000)
    document.body.classList.add('locked')
    content.innerHTML = lockedscreen;
    pressedKeys = [];
    updateSoftkeys('SOS');
    if (!navigator.battery) return
    navigator.getBattery().then((battery) => {
        document.querySelector('#batterylevel').innerText = battery.level * 100 + '%'
        battery.addEventListener("levelchange", () => {
            document.querySelector('#batterylevel').innerText = battery.level * 100 + '%'
        })
    })
}


function call() {
    var call = new MozActivity({
        name: "dial",
        data: {
            number: "1234567890"
        }
    });
}
function nav(move) {
    const currentIndex = document.activeElement.tabIndex;
    const next = currentIndex + move;
    const items = document.querySelectorAll('.nav');
    const targetElement = items[next];
    targetElement.focus();
}

function changeCode() {

}

function allowednumbers() {

}