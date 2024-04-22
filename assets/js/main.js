// variabili dei dati che voglio salvare valori default
let fasciaEtà = "Maggiorenne";
let kmValue = 0;
let totalPrice = 0;
let nomeUtente = '';

const elementName = document.getElementById('full_name')

elementName.addEventListener('change',function(){
    document.getElementById('user_name').innerHTML = elementName.value
})

//costante info ticket
const elementInfoTicket = document.getElementById('info_ticket')

// prezzo fisso al km
const kmPrice = 0.21;

const calcoloPrezzo = () => {
   if (fasciaEtà === "Minorenne") {
        totalPrice = (kmValue * kmPrice) - (kmValue * kmPrice * 0.20);
    } else if (fasciaEtà === "Over-65") {
        totalPrice = (kmValue * kmPrice) - (kmValue * kmPrice * 0.40);
    } else {
        totalPrice = kmValue * kmPrice;
    }
}


// input dei km inseriti dall' utente
const elementKm = document.getElementById('km');

// event listner su input dei km
elementKm.addEventListener('change',function(){
    kmValue = elementKm.value;
    calcoloPrezzo();
})

// input della fascia di età inseriti dall' utente
const elementFasciaEtà = document.getElementById('age');

// event listner su input della fsdscia eta
elementFasciaEtà.addEventListener('change',function(){
    fasciaEtà = elementFasciaEtà.value;
    calcoloPrezzo();
})


//funzione al click del bottone genera
const elementGenera = document.getElementById('btn_genera')

elementGenera.addEventListener('click',function(){
    document.getElementById ('carriage').innerHTML =  Math.floor(Math.random()*51);
    document.getElementById ('code_ticket').innerHTML = Math.floor(Math.random()*100000);
    document.getElementById ('price_ticket').innerHTML = `€ ${totalPrice.toFixed(2)}`;
    if (fasciaEtà === "Minorenne") {
        document.getElementById ('discount').innerHTML = `Sconto Minorenne`;
    } else if (fasciaEtà === "Over-65") {
        document.getElementById ('discount').innerHTML = `Sconto Over 65`;
    } else {
        document.getElementById ('discount').innerHTML = `Prezzo intero`;
    }

    document.getElementById('info_ticket').className = 'display_block'
})


const elementAnnulla = document.getElementById('btn_annulla')

elementAnnulla.addEventListener('click',function(){
    document.getElementById ('full_name').value = '';
    document.getElementById ('km').value = '';
    document.getElementById ('age').value = 'Maggiorenne';
    document.getElementById('info_ticket').className = 'info_ticket';
    totalPrice = '';
    document.getElementById ('carriage').innerHTML =  '';
    document.getElementById ('code_ticket').innerHTML = '';
})
