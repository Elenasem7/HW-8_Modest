   $('.burger').on('click', function(e){
      e.preventDefault();
   $('.navbar').toggleClass('navbar-open');
   });

   $('.overlay-image').slick({
      arrows: true,
      prevArrow: '<div><img class="prev" src="images/icon/prev.png" alt=""></div>',
      nextArrow: '<div><img class="next" src="images/icon/next.png" alt=""></div>'
   });
   