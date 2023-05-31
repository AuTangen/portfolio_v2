    var linkedin = document.querySelector('#linkedin');
    var github = document.querySelector('#github');
    var instagram = document.querySelector('#instagram')

    linkedin.addEventListener('mouseenter', function (e) {
        linkedin.classList.add('fa-bounce');
    });
    linkedin.addEventListener('mouseleave', function () {
        linkedin.classList.remove('fa-bounce');
    });

   github.addEventListener('mouseenter', function (e) {
       github.classList.add('fa-bounce');
    });
    github.addEventListener('mouseleave', function () {
        github.classList.remove('fa-bounce');
    });

    instagram.addEventListener('mouseenter', function (e) {
        instagram.classList.add('fa-bounce');
    });
    instagram.addEventListener('mouseleave', function () {
        instagram.classList.remove('fa-bounce');
    });
    


