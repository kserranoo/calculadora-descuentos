const inputPrecio = document.getElementsByClassName("precio")[0];
const inputCoupon = document.getElementsByClassName("coupon")[0];
const oferta = document.getElementsByClassName("oferta")[0];
const btnCalcular = document.getElementsByClassName("btn-calcular")[0];
const btnReset = document.getElementsByClassName("btn-reset")[0];

btnCalcular.addEventListener("click", aplicarCupon);
btnReset.addEventListener("click", (_) => {
  location.reload();
});

const couponList = [];
couponList.push({ 
  name: "regreso-a-clases",
  discount: 30,
});
couponList.push({
  name: "feliz-cumple",
  discount: 25,
});
couponList.push({
  name: "empieza-la-navidad",
  discount: 20,
});
couponList.push({
  name: "bienvenido-al-club",
  discount: 15,
});
couponList.push({
  name: "pruebame",
  discount: 90,
});

function aplicarCupon() {
  const price = Number(inputPrecio.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    oferta.innerText = "Por favor, ingrese los datos de su compra";
    return;
  }

  let discount;

  function validCoupon(couponElement) {
    return couponElement.name == coupon;
  }

  const isCouponValid = couponList.find(validCoupon);

  if (isCouponValid) {
    discount = isCouponValid.discount;
  } else {
    oferta.innerText = "Su cupón no es válido.";
    return;
  }

  const newPrice = (price * (100 - discount)) / 100;
  oferta.innerText = "El costo de su compra es de: $" + newPrice;
}
function sumar(num1, num2) {
  let suma;
  suma = num1 + num2;
}
