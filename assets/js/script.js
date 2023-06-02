    var linkedin = document.querySelector('#linkedin');
    var github = document.querySelector('#github');
    var instagram = document.querySelector('#instagram')
    var email = document.querySelector('#email')
    var profilePic = document.querySelector('#profile-pic')
    var jateContainer = document.querySelector('#jate-container')
    var jate = document.querySelector('#jate')
    var noteContainer = document.querySelector('#notetaker-container')
    var notetaker = document.querySelector('#notetaker')

// -------------------Bounce------------------------------
    linkedin.addEventListener('mouseenter', function (e) {
        linkedin.classList.add('fa-bounce');
    });
    linkedin.addEventListener('mouseleave', function () {
        linkedin.classList.remove('fa-bounce');
    });
// ----------------------------------------------------------
   github.addEventListener('mouseenter', function (e) {
       github.classList.add('fa-bounce');
    });
    github.addEventListener('mouseleave', function () {
        github.classList.remove('fa-bounce');
    });
// -----------------------------------------------------------
    instagram.addEventListener('mouseenter', function (e) {
        instagram.classList.add('fa-bounce');
    });
    instagram.addEventListener('mouseleave', function () {
        instagram.classList.remove('fa-bounce');
    });
// ------------------------------------------------------------
email.addEventListener('mouseenter', function (e) {
    email.classList.add('fa-bounce');
});
email.addEventListener('mouseleave', function () {
    email.classList.remove('fa-bounce');
});

    
// -------------------Zoom--------------------------------------

// profilePic.addEventListener('mouseenter', function (e) {
//     jate.classList.add('zoom');
// });
// profilePic.addEventListener('mouseleave', function () {
//     profilePic.classList.remove('zoom');
// });


jateContainer.addEventListener('mouseenter', function (e) {
    jate.classList.add('zoom');
});
jateContainer.addEventListener('mouseleave', function () {
    jate.classList.remove('zoom');
});



noteContainer.addEventListener('mouseenter', function (e) {
    jate.classList.add('zoom');
});
noteContainer.addEventListener('mouseleave', function () {
    jate.classList.remove('zoom');
});

// ---------------------------
function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "atangen2406@gmail.com",
        Password : "password",
        To : 'atangen2406@gmail@gmail.com',
        From : document.getElementById("form-email").value,
        Subject : "Portfolio Contact Enquiry",
        Body : "Name: " + document.getElementById("form-name").value
        + "<br> Email " + document.getElementById('form-message')
    }).then(
      message => alert("Message Sent! We'll get back to you soon")
    );
}