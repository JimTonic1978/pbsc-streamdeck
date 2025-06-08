// WELCHE Buttons dürfen sichtbar bleiben?
const whitelist = [
    "Tisch 4 - neu",
    "Tisch 3 - neu",
    "Tisch 5 - neu",
    "Tisch 6 - neu",
    "Alle Tische",
    "Punkteübersicht",
    "startStreaming",
    "stopStreaming"
];

// MutationObserver → prüft DOM Änderungen
const observer = new MutationObserver(() => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
        const label = btn.innerText.trim();
        if (whitelist.includes(label)) {
            btn.style.display = "";
            // Styling für Start/Stop
            if (label === "startStreaming") {
                btn.classList.add("start");
            } else if (label === "stopStreaming") {
                btn.classList.add("stop");
            }
        } else {
            btn.style.display = "none";
        }
    });

    // OPTION: Auch andere Elemente (QR, JSON, Überschriften etc.) ausblenden:
    document.querySelectorAll("pre, canvas, svg").forEach(el => el.style.display = "none");
    document.querySelectorAll("h2, h3, h4, h5, h6").forEach(el => el.style.display = "none");
    document.querySelectorAll("p").forEach(el => el.style.display = "none");
    document.querySelectorAll("div").forEach(div => {
        if (div.id !== 'custom-ui' && div.querySelector('button') == null) {
            div.style.display = 'none';
        }
    });
});

// Startet den Observer
observer.observe(document.body, { childList: true, subtree: true });

// Log info
console.log("🚀 PBSC Streamdeck Filter aktiv.");
