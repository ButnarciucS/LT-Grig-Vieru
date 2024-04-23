new SimpleLightbox({elements:".galerie-container a"});//ini'ializ[m elementele din galerie se deschid[ cind faci clic pe ele
AOS.init();
emailjs.init("Ld943iUotlD54weiV");

function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_xulyy5r", "template_svd36mo", date)
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function (error) {
            alert("Eroare la transmitere. Contactati programatorul.")
        })

}