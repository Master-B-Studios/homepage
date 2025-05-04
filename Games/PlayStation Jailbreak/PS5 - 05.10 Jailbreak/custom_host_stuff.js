// @ts-check

const LOCALSTORE_REDIRECTOR_LAST_URL_KEY = "redirector_last_url";

const SESSIONSTORE_ON_LOAD_AUTORUN_KEY = "on_load_autorun";

const MAINLOOP_EXECUTE_PAYLOAD_REQUEST = "mainloop_execute_payload_request";

let exploitStarted = false;

async function run(wkonly = false, animate = true) {
    if (exploitStarted) {
        return;
    }
    exploitStarted = true;

    await switchPage("console-view", animate);

    // not setting it in the catch since we want to retry both on a handled error and on a browser crash
    sessionStorage.setItem(SESSIONSTORE_ON_LOAD_AUTORUN_KEY, wkonly ? "wkonly" : "kernel");

    try {
        if (!animate) {
            // hack but waiting a bit seems to help
            // this only gets hit when auto-running on page load
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
        await run_psfree(fw_str);

    } catch (error) {
        log("Exploit fehlgeschlagen: " + error, LogLevel.ERROR);

        log("Neuversuch in 2 Sekunden...", LogLevel.LOG);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        window.location.reload();
        return; // this is necessary
    }

    try {
        await main(window.p, wkonly); // if all goes well, this should block forever
    } catch (error) {
        log("Exploit fehlgeschlagen: " + error, LogLevel.ERROR);
        // p.write8(new int64(0,0), 0); // crash
    }

    log("Neuversuch in 4 Sekunden...", LogLevel.LOG);
    await new Promise((resolve) => setTimeout(resolve, 4000));
    window.location.reload();
}

async function switchPage(id, animate = true) {
    const parentElement = document.getElementById('main-content');
    const targetElement = document.getElementById(id);
    if (!targetElement || targetElement.parentElement !== parentElement) {
        throw new Error('Invalid target element');
    }

    const oldSelectedElement = parentElement.querySelector('.selected');

    if (oldSelectedElement) {
        if (animate) {
            let oldSelectedElementTransitionEnd = new Promise((resolve) => {
                oldSelectedElement.addEventListener("transitionend", function handler(event) {
                    // we get back transitionend for children too but we don't want that
                    if (event.target === oldSelectedElement) {
                        oldSelectedElement.removeEventListener("transitionend", handler);
                        resolve();
                    }
                });
            });
            oldSelectedElement.classList.remove('selected');
            await oldSelectedElementTransitionEnd;
        } else {
            // override transition with none for instant switch
            oldSelectedElement.style.setProperty('transition', 'none', 'important');
            oldSelectedElement.offsetHeight;
            oldSelectedElement.classList.remove('selected');
            oldSelectedElement.offsetHeight;
            oldSelectedElement.style.removeProperty('transition');
        }
    }

    if (animate) {
        let targetElementTransitionEnd = new Promise((resolve) => {
            targetElement.addEventListener("transitionend", function handler(event) {
                // we get back transitionend for children too but we don't want that
                if (event.target === targetElement) {
                    targetElement.removeEventListener("transitionend", handler);
                    resolve();
                }
            });
        });
        targetElement.classList.add('selected');
        await targetElementTransitionEnd;
    } else {
        // override transition with none for instant switch
        targetElement.style.setProperty('transition', 'none', 'important');
        targetElement.offsetHeight;
        targetElement.classList.add('selected');
        targetElement.offsetHeight;
        targetElement.style.removeProperty('transition');
    }
}


function registerAppCacheEventHandlers() {
    var appCache = window.applicationCache;

    let toast;

    function createOrUpdateAppCacheToast(message, timeout = -1) {
        if (!toast) {
            toast = showToast(message, timeout);
        } else {
            updateToastMessage(toast, message);
        }

        if (timeout > 0) {
            setTimeout(() => {
                removeToast(toast);
                toast = null;
            }, timeout);
        }
    }

    if (document.documentElement.hasAttribute("manifest")) {
        if (!navigator.onLine) {
            createOrUpdateAppCacheToast('Offline...', 2000);
        } else {
            // this is redundant
            createOrUpdateAppCacheToast("Suche nach Updates...");
        }
    }

    appCache.addEventListener('cached', function (e) {
        createOrUpdateAppCacheToast('Website geladen....', 1500);
    }, false);

    appCache.addEventListener('checking', function (e) {
        createOrUpdateAppCacheToast("Suche nach Updates...");
    }, false);

    appCache.addEventListener('downloading', function (e) {
        createOrUpdateAppCacheToast('Cache Website...');
    }, false);

    appCache.addEventListener('error', function (e) {
        // only show error toast if we're online
        if (navigator.onLine) {
            createOrUpdateAppCacheToast('Fehler beim Cachen der Website...', 5000);
        } else {
            createOrUpdateAppCacheToast('Offline...', 2000);
        }
    }, false);

    appCache.addEventListener('noupdate', function (e) {
        createOrUpdateAppCacheToast('Cache aktuell...', 1500);
    }, false);

    appCache.addEventListener('obsolete', function (e) {
        createOrUpdateAppCacheToast('Website nicht erreichbar... Cache wird gelöscht...');
    }, false);

    appCache.addEventListener('progress', function (e) {
        let percentage = Math.round((e.loaded / e.total) * 100);

        createOrUpdateAppCacheToast('Cache Website... ' + percentage + '%');

        // the last item takes an unreasonably long time to complete (with a big update)
        // ig its doing some extra stuff before the last event is fired
        // so show a new message for it
        if (e.loaded + 1 == e.total) {
            createOrUpdateAppCacheToast("Verarbeite... Bitte warten...");
        }
    }, false);

    appCache.addEventListener('updateready', function (e) {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
            createOrUpdateAppCacheToast('Die Website wurde aktualisiert... Bitte neu laden...');
        }
    }, false);
}

function registerL2ButtonHandler() {
    document.addEventListener("keydown", async (event) => {
        if (event.keyCode === 118) {
            const lastRedirectorValue = localStorage.getItem(LOCALSTORE_REDIRECTOR_LAST_URL_KEY) || "https://";
            const redirectorValue = prompt(" URL eingeben:", lastRedirectorValue);

            // pressing cancel works as expected, but pressing the back button unfortunately is the same as pressing ok
            if (redirectorValue && redirectorValue !== "https://") {
                localStorage.setItem(LOCALSTORE_REDIRECTOR_LAST_URL_KEY, redirectorValue);
                window.location.href = redirectorValue;
            }
        }
    });
}

const TOAST_SUCCESS_TIMEOUT = 2000;
const TOAST_ERROR_TIMEOUT = 5000;

function showToast(message, timeout = 2000) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    toastContainer.appendChild(toast);

    // Trigger reflow to enable animation
    toast.offsetHeight;

    toast.classList.add('show');

    if (timeout > 0) {
        setTimeout(() => {
            removeToast(toast);
        }, timeout);
    }

    return toast;
}

function updateToastMessage(toast, message) {
    if (!toast) {
        return;
    }
    toast.textContent = message;
}

async function removeToast(toast) {
    if (!toast) {
        return;
    }
    toast.classList.add('hide');
    toast.addEventListener('transitionend', () => {
        toast.remove();
    });
}


function populatePayloadsPage(wkOnlyMode = false) {
    const payloadsView = document.getElementById('payloads-view');

    while (payloadsView.firstChild) {
        payloadsView.removeChild(payloadsView.firstChild);
    }

    const payloads = payload_map;

    for (const payload of payloads) {
        if (wkOnlyMode && !payload.toPort && !payload.customAction) {
            continue;
        }

        if (payload.supportedFirmwares && !payload.supportedFirmwares.some(fwPrefix => window.fw_str.startsWith(fwPrefix))) {
            continue;
        }

        const payloadButton = document.createElement("a");
        payloadButton.classList.add("btn");
        payloadButton.classList.add("w-100");
        payloadButton.tabIndex = 0;

        const payloadTitle = document.createElement("p");
        payloadTitle.classList.add("payload-btn-title");
        payloadTitle.textContent = payload.displayTitle;

        const payloadDescription = document.createElement("p");
        payloadDescription.classList.add("payload-btn-description");
        payloadDescription.textContent = payload.description;

        const payloadInfo = document.createElement("p");
        payloadInfo.classList.add("payload-btn-info");
        payloadInfo.innerHTML = `v${payload.version} &centerdot; ${payload.author}`;

        payloadButton.appendChild(payloadTitle);
        payloadButton.appendChild(payloadDescription);
        payloadButton.appendChild(payloadInfo);
        payloadButton.addEventListener("click", function () {
            window.dispatchEvent(new CustomEvent(MAINLOOP_EXECUTE_PAYLOAD_REQUEST, { detail: payload }));
        });

        payloadsView.appendChild(payloadButton);
    }

}