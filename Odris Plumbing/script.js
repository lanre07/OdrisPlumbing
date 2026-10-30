const navLinks = document.querySelector(".navLinks");
const menuBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");

function showMenu() {
  navLinks.classList.toggle("active");
  menuBtn.classList.toggle("active");
  closeBtn.classList.toggle("active");
}
menuBtn.addEventListener("click", showMenu);

function closeMenu() {
  navLinks.classList.remove("active");
  menuBtn.classList.remove("active");
  closeBtn.classList.remove("active");
}

closeBtn.addEventListener("click", closeMenu);


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const add = item.querySelector(".add");
  const minus = item.querySelector(".minus");
  const answer = item.querySelector(".answer");

  function showAnswer() {
    answer.classList.add("active");
    minus.classList.add("active");
    add.classList.add("active");
  }

  function hideAnswer() {
    answer.classList.remove("active");
    minus.classList.remove("active");
    add.classList.remove("active");
  }

  add.addEventListener("click", showAnswer);
  minus.addEventListener("click", hideAnswer);
});


const prev = document.getElementById("prev");
const next = document.getElementById("next");
const imageslider = document.getElementById("imageSlider");

const image = [
  "images/mordern water closet.png",
  "images/bathtop.png",
  "images/shower head.png",
  "images/kitchen sink.png",
  "images/water tank.jpg",
  "images/builing installation.jpg",
  "images/pumbing machine.jpg",
  "images/pipe installation.jpg",
  "images/water closet.jpg",
];

let currentImage = 0;

if (next && imageslider) {
  next.addEventListener("click", () => {
    currentImage++;
    if (currentImage >= image.length) {
      currentImage = 0;
    }
    imageslider.src = image[currentImage];
  });
}

if (prev && imageslider) {
  prev.addEventListener("click", () => {
    currentImage--;
    if (currentImage < 0) {
      currentImage = image.length - 1;
    }
    imageslider.src = image[currentImage];
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const owner_phone_number = "2349163894496";

  const bookingForm = document.getElementById("booking-form");

  if (!bookingForm) {
    console.error("Form element #booking-form not found!");
    return;
  }

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const rawMessage = `Hello! I would like to book a session.

    *Name:* ${fullname}
    *Email:* ${email}
    *Phone:* ${phone}
    *Service:* ${service}
    *Message:* ${message}`;

    const encodedMessage = encodeURIComponent(rawMessage);

    
    const whatsappUrl = `https://wa.me/${owner_phone_number}?text=${encodedMessage}`;

    alert("Booking successful! You are now being redirected to WhatsApp.");

    e.target.reset();

    window.open(whatsappUrl, '_blank');
  });
});
