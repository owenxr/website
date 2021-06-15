var navActive = false;

window.onload = function () {
    if (window.innerWidth <= 770) mobileActive = true;
    navSlide();
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()

        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top,
          },
          1000,
          'swing'
        )

        if(navActive) {
            $(".nav").toggleClass('active');
            $('.line1').toggleClass('toggle')
            $('.line2').toggleClass('toggle')
            $('.line3').toggleClass('toggle')
            navActive = false;
        }

      });
};

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const links = document.querySelectorAll(".links");
    const line1 = document.querySelector(".line1");
    const line2 = document.querySelector(".line2");
    const line3 = document.querySelector(".line3");

    burger.addEventListener('click', () => {

        document.querySelector(".nav").classList.toggle('active');

        if(navActive) navActive = false;
        else navActive = true;

        currScrollY = window.scrollY;

        for (var i = 0; i < links.length; i++) {
            if (links[i].style.webkitAnimationName) {
                links[i].style.webkitAnimationName = '';
                links[i].style.opacity = '1';
            }
            else {
                links[i].style.webkitAnimationName = 'linksFade';
                links[i].style.webkitAnimationDuration = (i / 3 + 0.1) + 's';
                links[i].style.opacity = '1';
            }
        }

        line1.classList.toggle('toggle');
        line2.classList.toggle('toggle');
        line3.classList.toggle('toggle');



    })
}