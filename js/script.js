'use strict';
const form = document.querySelector('#ticketform');
if (form) {
  const type = document.querySelector('#type');
  const quantity = document.querySelector('#quantity');
  const total = document.querySelector('#total');
  const result = document.querySelector('#result');
  const currency = new Intl.NumberFormat('de-DE', {style:'currency',currency:'EUR'});
  const update = () => {
    const n = Number(quantity.value);
    total.textContent = type.value && Number.isInteger(n) && n >= 1 && n <= 6 ? 'Gesamtpreis: ' + currency.format(Number(type.value)*n) : 'Gesamtpreis: Bitte gültige Ticketart und Anzahl wählen.';
    result.hidden = true;
  };
  form.addEventListener('input', update);
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    result.textContent = 'Danke! Deine Demo-Anfrage wurde lokal bestätigt. Es wurden keine Daten übermittelt und keine Tickets gebucht.';
    result.hidden = false;
  });
  update();
}
