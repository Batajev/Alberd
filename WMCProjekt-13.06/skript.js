let ausgaben = [];
let gesamtBetrag = 0;

const kategorieAuswahl = document.getElementById('kategorie-auswahl');
const betragEingabe = document.getElementById('betrag-eingabe');
const datumEingabe = document.getElementById('datum-eingabe');
const hinzufügenBtn = document.getElementById('hinzufügen-btn');
const ausgabenListe = document.getElementById('ausgaben-liste');
const gesamtBetragZelle = document.getElementById('gesamt-betrag');

hinzufügenBtn.addEventListener('click', function() {
    const kategorie = kategorieAuswahl.value;
    const betrag = Number(betragEingabe.value);
    const datum = datumEingabe.value;

    if (kategorie === '') {
        alert('Bitte eine Kategorie auswählen');
        return;
    }
    if (isNaN(betrag) || betrag <= 0) {
        alert('Bitte einen gültigen Betrag eingeben');
        return;
    }
    if (datum === '') {
        alert('Bitte ein Datum auswählen');
        return;
    }
    ausgaben.push({ kategorie, betrag, datum });

    gesamtBetrag += betrag;
    gesamtBetragZelle.textContent = gesamtBetrag.toFixed(2);

    const neueListeElement = document.createElement('li');
    neueListeElement.innerHTML = `
        <span>${kategorie} - ${betrag.toFixed(2)} € - ${datum}</span>
        <button class="löschen-btn">Löschen</button>
    `;
    ausgabenListe.appendChild(neueListeElement);

    const löschenBtn = neueListeElement.querySelector('.löschen-btn');
    löschenBtn.addEventListener('click', function() {
        ausgaben = ausgaben.filter(ausgabe => ausgabe !== { kategorie, betrag, datum });
        gesamtBetrag -= betrag;
        gesamtBetragZelle.textContent = gesamtBetrag.toFixed(2);
        ausgabenListe.removeChild(neueListeElement);
    });
});
