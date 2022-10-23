const inputPrecio = document.getElementsByClassName('precio')[0];
const inputDescuento = document.getElementsByClassName('descuento')[0];
const oferta = document.getElementsByClassName('oferta')[0];
const btnCalcular = document.getElementsByClassName('btn-calcular')[0];
const btnReset = document.getElementsByClassName('btn-reset')[0];
    
btnCalcular.addEventListener('click', calcularDescuento);
btnReset.addEventListener('click', _ => {location.reload()});

    function calcularDescuento() {

        const price = Number(inputPrecio.value);
        const discount = Number(inputDescuento.value);
        

        if (!price || !discount) {
            oferta.innerText = "Por favor, ingrese los datos de su compra";
           return
        }
        if (discount> 100) {
            oferta.innerText = "El % de su cupón no puede ser mayor a 100";
           return  
        }

        const newPrice = (price*(100-discount))/100;
        oferta.innerText = "El costo de su compra es de: $" + newPrice;
    }