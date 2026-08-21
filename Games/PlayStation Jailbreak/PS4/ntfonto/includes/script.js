let timerId = null; 
const label = document.getElementById('autoJbLabel');
const checkbox = document.getElementById('autoJbInput');
const jeilbrekBtn = document.getElementById('jeilbrek');
const UAElement = document.getElementById("UA");

const storedAutoJb = localStorage.getItem("autoJb");
let autoJbValue = storedAutoJb !== null ? storedAutoJb === "true" : true;

// choose one of kernel exploits
var exploitChain = localStorage.getItem("exploitChain") || "lapse";
const netctrlRadio = document.getElementById("netctrl-exploit");
const lapseRadio = document.getElementById("lapse-exploit");
const kexForm = document.getElementById('kernel-options');
const jbAudio = document.getElementById("jbAudio");

// Show user agent
UAElement.innerText += " " + navigator.userAgent;

kexForm.addEventListener("change", function (event) {
    localStorage.setItem("exploitChain", event.target.value);
    exploitChain = event.target.value;
});

// jailbreak execution
jeilbrekBtn.addEventListener("click", function (e) {
    jeilbrekBtn.disabled = true;
    stopInterval();
    doJb();
});

checkbox.addEventListener('change', function () {
    localStorage.setItem("autoJb", checkbox.checked);
    if (checkbox.checked == true && jeilbrekBtn.disabled == false) {
        jailbreakCountdown();
        return;
    }
    stopInterval();
});

function stopInterval(){
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
    label.textContent = "Auto-Jailbreak";
}

function jailbreakCountdown() {   
    stopInterval();

    let countdown = 30;

    if (jbAudio) {jbAudio.currentTime = 0;
        jbAudio.play().catch(function (error) {
            console.log("Audio konnte nicht automatisch gestartet werden:", error);
        });
    }

    label.textContent = `AutoJailbreak: ${countdown}`;
    timerId = setInterval(() => {
        countdown--;
        //label.textContent = `Auto-Jailbreak: ${countdown}`;
        label.textContent = `Auto-Jailbreak: ...`;

        if (countdown < 0) {
            jeilbrekBtn.disabled = true; 
            clearInterval(timerId);
            timerId = null;
            label.textContent = 'Jailbreak gestartet';
            doJb();
        }
    }, 1000);
}

function cacheProgress(e) {
    console.log(
        "[CACHE]",
        "loaded:", e.loaded,
        "total:", e.total,
        "percent:", Math.round(e.loaded / e.total * 100) + "%"
    );
    var Percent = (Math.round(e.loaded / e.total * 100));
    //document.title = "Caching: " + Percent + "%";
    document.title = "Caching: " + e.loaded + " " +e.total + " = " + Percent + "%";
}

function displayCacheProgress() {
    setTimeout(function () {document.title = "\u2713";}, 1000);
    setTimeout(function () {document.title = "MB CSSFontFace-Exploit";}, 3000);
}


document.addEventListener("DOMContentLoaded", function() {
    // Cache handling
    if (window.applicationCache) {
        window.applicationCache.addEventListener("progress", cacheProgress, false);
        window.applicationCache.oncached = function (e) { displayCacheProgress(); };
        window.applicationCache.onupdateready = function (e) { displayCacheProgress(); };
    }
    // choose prefered exploit chain
    if (exploitChain == "netctrl") {netctrlRadio.checked = true;}
    else {lapseRadio.checked = true;}
    // apply autojb localStorage value
    checkbox.checked = autoJbValue;
    if (autoJbValue) jailbreakCountdown();
});

/*
document.addEventListener("DOMContentLoaded", function() {

    if (window.applicationCache) {

        const appCache = window.applicationCache;

        appCache.addEventListener("checking", function(e) {
            console.log("[APPCACHE] checking");
            document.title = "Cache: checking";
        });

        appCache.addEventListener("downloading", function(e) {
            console.log("[APPCACHE] downloading");
            document.title = "Cache: downloading";
        });

        appCache.addEventListener("progress", function(e) {

            const percent = e.total
                ? Math.round((e.loaded / e.total) * 100)
                : 0;

            console.log(
                "[APPCACHE] progress:",
                e.loaded,
                "/",
                e.total,
                "(" + percent + "%)"
            );

            document.title = "Caching: " + percent + "%";
        });

        appCache.addEventListener("cached", function(e) {
            console.log("[APPCACHE] cached");
            displayCacheProgress();
        });

        appCache.addEventListener("updateready", function(e) {
            console.log("[APPCACHE] updateready");
            displayCacheProgress();
        });

        appCache.addEventListener("error", function(e) {
            console.log("[APPCACHE] ERROR", e);
            document.title = "Cache: ERROR";
        });

        appCache.addEventListener("obsolete", function(e) {
            console.log("[APPCACHE] obsolete");
            document.title = "Cache: obsolete";
        });

        appCache.addEventListener("noupdate", function(e) {
            console.log("[APPCACHE] noupdate");
            document.title = "Cache: noupdate";
        });
    }

    // choose preferred exploit chain
    if (exploitChain == "netctrl") {
        netctrlRadio.checked = true;
    } else {
        lapseRadio.checked = true;
    }

    checkbox.checked = autoJbValue;

    if (autoJbValue) {
        jailbreakCountdown();
    }
});
*/