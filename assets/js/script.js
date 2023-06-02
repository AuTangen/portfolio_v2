    var linkedin = document.querySelector('#linkedin');
    var github = document.querySelector('#github');
    var instagram = document.querySelector('#instagram')
    var email = document.querySelector('#email')
    var profilePic = document.querySelector('#profile-pic')
    var jateContainer = document.querySelector('#jate-container')
    var jate = document.querySelector('#jate')
    var noteContainer = document.querySelector('#notetaker-container')
    var notetaker = document.querySelector('#notetaker')
    var resume = document.querySelector('#resume')
    var resumeArrow = document.querySelector('#resume-arrow')


    const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 700;
    let sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".full-nav a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".full-nav a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

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

resume.addEventListener('mouseenter', function (e) {
    resumeArrow.classList.add('fa-shake');
});
resume.addEventListener('mouseleave', function () {
    resumeArrow.classList.remove('fa-shake');
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