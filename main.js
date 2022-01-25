// FUNZIONE CHE GENERA I DATI AL CLICK DEL PULSANTE
let generateButton = document.getElementById("enter");

generateButton.addEventListener("click", 
    function() {

        // INPUT DA INSERIRE
        const name = document.getElementById('name').value;
        console.log(name);

        const km = document.getElementById('km').value;
        console.log(km);

        const age = document.getElementById('age').value;
        console.log(age);

        // calcolo il prezzo del biglietto
        // prezzo per km
        let pricePerTicket = 0.21;
        console.log("Il prezzo per Km è pari a: " + pricePerTicket);

        // Calcolo prezzo biglietto di listino - senza sconto
        const priceTicket = km * pricePerTicket;
        console.log("Il prezzo del biglietto senza sconto è pari a: " + priceTicket);

        // Sconto under 18
        let sale20 = priceTicket - (priceTicket * 0.2);
        // Sconto over 65
        let sale40 = priceTicket - (priceTicket * 0.4);

        let typeUser = 'Biglietto Standard';
        let finalPrice; 

        // Condizione sconto applicato in base all'età
        if (age == 'under18') {
            finalPrice = sale20;
            typeUser = 'Sconto Junior';
            console.log("Sconto junior: " + finalPrice)

        } else if (age == 'over65') {
            finalPrice = sale40;
            typeUser = 'Sconto Senior';
            console.log("Sconto Senior: " + finalPrice)

        } else {
            finalPrice = priceTicket;
            console.log("Sconto Adult: " + finalPrice)
        }

        // generatore da 1 a 9 per cabina
        let carriageNumber = Math.floor((Math.random() * 9) + 1);

        // generatore numero compreso tra 90000 e 99999 per codice CP
        let discountCode = Math.floor(Math.random() * 10000) + 90000;
    }
)

