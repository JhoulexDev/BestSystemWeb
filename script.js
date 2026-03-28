// Scroll suave al contacto
function scrollToContact() {
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
}

// Simulación de envío de formulario
/* function sendMessage(e) {
    e.preventDefault();
    alert('Mensaje enviado. Pronto te contactaré.');
}
 */


/* CARRUSEL */

let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
}

document.querySelector('.next').onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
};

document.querySelector('.prev').onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
};

setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 6000);



/* VENTANA POPUP PARA ENVÍO CORRECTO DE LOS DATOS */

const form = document.querySelector("form");
const popup = document.getElementById("popup-success");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(new FormData(form)).toString()
        })
            .then(() => {
                popup.classList.add("active");
                form.reset();
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Hubo un error. Intenta nuevamente.");
            });
    });
}

function closePopup() {
    popup.classList.remove("active");
}




/* HEADER CON RESPONSIVE PARA CELULARES */

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll("#nav a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
}