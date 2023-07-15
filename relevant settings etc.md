# Relevant settings
* navigator.mozSettings.createLock().set({'lockscreen.enabled': false});
* navigator.mozPower.screenEnabled = false | For that you need the power permission, and to be certified
* navigator.mozSettings.createLock().get('lockscreen.enabled)

* r.a.addObserver("lockscreen.enabled", this), r.a.addObserver("lockscreen.lock-immediately", this), r.a.addObserver("lockscreen.notifications-preview.enabled", this),  r.a.addObserver("pocketmode.autolock.enabled", this), r.a.addObserver("lockscreen.remote-lock", this)

* Some device settings that might be relevant: screen.timeout and lockscreen.enabled. You could also turn off WiFi, BT, etc. Using the Settings API you could probably even disable the system lockscreen, i.e. lockscreen.passcode-lock.enabled

> Thank you tbrrss for helping me out!