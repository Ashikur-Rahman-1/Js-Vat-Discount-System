function addPrice(intePrice, inteQuantity) {
  let totalPrice = intePrice * inteQuantity;
  console.log("Total Price:", Math.round(totalPrice));
  return totalPrice;
}

function addedVat(returnTotalPrice, inteVat) {
  let productVat = (returnTotalPrice * inteVat) / (100 + inteVat);
  let includedVat = returnTotalPrice + productVat;
  console.log("Including Vat:", Math.round(includedVat), "Vat", inteVat, "%");
  return includedVat;
}

function makeDiscount(returnincludedVat, inteDiscount) {
  let productDiscount = (returnincludedVat * inteDiscount) / 100;
  let discountedPrice = returnincludedVat - productDiscount;
  console.log(
    "Discounted Price:",
    Math.round(discountedPrice),
    "Discount",
    inteDiscount,
    "%"
  );
}

let price = prompt("Enter a price ");
let quantity = prompt("Enter quantity ");
let vat = prompt("Enter vat");
let discount = prompt("Enter discount");

let intePrice = Number(price);
let inteQuantity = parseInt(quantity);
let inteVat = Number(vat);
let inteDiscount = Number(discount);

let returnTotalPrice = addPrice(intePrice, inteQuantity);

let returnincludedVat = addedVat(returnTotalPrice, inteVat);

makeDiscount(returnincludedVat, inteDiscount);
