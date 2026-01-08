function switchImage(thumbnail, mainID){
  const main = document.getElementById(mainID);
  main.style.opacity = 0;
  setTimeout(()=>{
    main.src = thumbnail.src;
    main.style.opacity = 1;
  },200);
}

function orderWhatsApp(product, price){
  const phone = "94716626569";   // replace with your WhatsApp number
  const msg = `Hello, I am interested in:\nProduct: ${product}\nPrice: ${price}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url,"_blank");
}
