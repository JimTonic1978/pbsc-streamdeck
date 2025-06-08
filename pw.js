const password = "Wesel#2020";

function checkPassword() {
    const entered = prompt("Passwort eingeben:");
    if (entered !== password) {
        alert("Falsches Passwort. Zugriff verweigert.");
        window.location.reload();
    }
}
