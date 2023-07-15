document.addEventListener('keydown', e => {
    if (!document.querySelector('#settings').classList.contains('hidden')) {
        const id = document.activeElement.id

        if (e.key == "ArrowDown") nav(1)
        if (e.key == "ArrowUp") nav(-1)


        if (e.key == "Enter") {
            if (id == 'changeCode') return changeCode()
            if (id == 'allowednumbers') return allowednumbers();
        }

    }
})