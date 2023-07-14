document.addEventListener('keydown', e => {
    if (!document.querySelector('#settings').classList.contains('hidden')) {
        const id = document.activeElement.id

        if (e.key == "ArrowDown") nav(1)
        if (e.key == "ArrowUp") nav(-1)


        if (id == "sosButton") {
            if(JSON.parse(localStorage.passcode).includes(sosbutton)) return alert('SOS key cant be found in passcode.'), document.querySelector('#sosButton').focus();
            sosbutton = e.key;
            document.activeElement.innerText = sosbutton;
            localStorage.sosbutton = sosbutton
            document.activeElement.parentElement.focus();
            return
        }
        if (e.key == "Enter") {
            if (id == 'changeCode') return changeCode()
            if (id == 'sosbuttonchange') return document.querySelector('#sosButton').focus();
            if (id == 'allowednumbers') return allowednumbers();
        }

    }
})