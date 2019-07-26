 $(document).ready(function() {
     $('.carousel').slick({
         slidesToShow: 3,
         centerMode: true,
         nextArrow: '<i class="fa fa-arrow-right rightArrowSlick"></i>',
         prevArrow: '<i class="fa fa-arrow-left leftArrowSlick"></i>',
         responsive: [
        {
              breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

  ]
     });
 });

