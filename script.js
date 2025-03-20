let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
        delay: 3000,
        disableOnInteraction:false,
    }
  });
  document.getElementById('paymentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const eventDate = document.getElementById('date').value;
    const eventType = document.getElementById('eventType').value;

    const options = {
      "key": "rzp_test_ry03BDn5tTNhYl", // Replace with your Razorpay test key
      "amount": "50000", // 500.00 INR in paisa
      "currency": "INR",
      "name": "Evento",
      "description": `Booking for ${eventType} on ${eventDate}`,
      "handler": function (response) {
        alert("Payment Successful!\nPayment ID: " + response.razorpay_payment_id);
        // Optionally send form + payment details to server here
      },
      "prefill": {
        "name": name,
        "email": email,
        "contact": phone
      },
      "theme": {
        "color": "#f66f6a"
      }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  });

