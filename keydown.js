document.addEventListener('keydown', e => {
    e.key.includes('Arrow') ? e.preventDefault() : false;

    if (document.querySelector('#firstuse')) {
        if (e.key == "SoftLeft") {
            if (passcode.length < 4) return alert('Key combination has to consist of at least 4 keys.')
            localStorage.passcode = JSON.stringify(passcode);
            passcode = [];
            return content.innerHTML = unlocked, updateSoftkeys('', 'LOCK', 'Settings')
        }
        passcode.push(e.key)
        document.querySelector('#keycombi').classList.remove('primary')
        document.querySelector('#keycombi').innerHTML = ""

        for (let i = 0; i < passcode.length; i++) {
            document.querySelector('#keycombi').innerHTML += passcode[i] + ', ';

        }
    }

    // console.log(e.key)
   

    
    
})
let passcode = [];

window.onerror = (a, b, c, d, e) => {
    console.error(`${a} at ${b} in line ${c}`)
    return true;
};