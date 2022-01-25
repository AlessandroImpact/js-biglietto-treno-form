/*salvo in una variabile il riferimento al bottone "genera" */

const bottone = document.getElementById('calc');

bottone.addEventListener('click' , 
    function() {
        const nome = document.getElementById('nome').value;

        const kmDaPercorrere = document.getElementById('km').value;

        const fasciaEta = document.getElementById('eta').value;

        const prezzoKm = 0.21;

        let prezzoBiglietto = kmDaPercorrere * prezzoKm;

        if(fasciaEta == "minorenne") {

        }else if ( fasciaEta == "over65") {
            
        }
        }

)