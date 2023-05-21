$(function () {
 
  const hamburger = document.getElementById('menu__btn');
  const headerMenu = document.getElementById('menu__list');
  const menuLinks = document.querySelectorAll('.menu__link');


  hamburger.addEventListener('click', () => {
      headerMenu.classList.toggle('menu__list--active');
      hamburger.classList.toggle('menu__btn--open');
  })

  menuLinks.forEach(link => {
      link.addEventListener('click', () => {
          headerMenu.classList.remove('menu__list--active');
          hamburger.classList.remove('menu__btn--open');
      });
  });   

  $('.header-inner__slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          variableWidth: true,
        }
      },
    ] 

  });
  


  $(".featured-inner__items").slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.50775 17.1646C7.77805 17.1651 8.04001 17.0704 8.24815 16.8969C8.36529 16.7991 8.46212 16.6791 8.5331 16.5437C8.60407 16.4082 8.6478 16.2601 8.66177 16.1076C8.67574 15.9551 8.65968 15.8014 8.61451 15.6552C8.56934 15.5089 8.49595 15.3731 8.39854 15.2555L3.21574 9.01601L8.21344 2.76487C8.30954 2.6458 8.3813 2.50879 8.4246 2.36172C8.46791 2.21465 8.4819 2.06042 8.46577 1.90789C8.44965 1.75536 8.40372 1.60754 8.33064 1.47293C8.25755 1.33832 8.15875 1.21957 8.03991 1.12351C7.92021 1.01753 7.78004 0.937598 7.62818 0.88872C7.47633 0.839841 7.31607 0.823074 7.15747 0.83947C6.99887 0.855866 6.84535 0.905071 6.70655 0.983998C6.56774 1.06293 6.44665 1.16987 6.35087 1.29812L0.763163 8.28263C0.593008 8.49093 0.499989 8.7522 0.499989 9.02183C0.499989 9.29146 0.593008 9.55273 0.763163 9.76102L6.54754 16.7455C6.66359 16.8864 6.81102 16.9978 6.97785 17.0706C7.14468 17.1434 7.32622 17.1756 7.50775 17.1646Z" /></svg></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.65891 0.835395C1.38861 0.834864 1.12665 0.929591 0.918511 1.10313C0.801367 1.20086 0.704535 1.32088 0.633558 1.45632C0.562582 1.59175 0.518856 1.73995 0.504886 1.89242C0.490916 2.04489 0.506975 2.19863 0.552145 2.34484C0.597315 2.49106 0.670706 2.62687 0.768117 2.74449L5.95092 8.98399L0.953218 15.2351C0.857121 15.3542 0.785358 15.4912 0.742054 15.6383C0.69875 15.7854 0.684759 15.9396 0.700885 16.0921C0.717011 16.2446 0.762935 16.3925 0.83602 16.5271C0.909104 16.6617 1.00791 16.7804 1.12675 16.8765C1.24645 16.9825 1.38662 17.0624 1.53847 17.1113C1.69033 17.1602 1.85058 17.1769 2.00918 17.1605C2.16778 17.1441 2.3213 17.0949 2.46011 17.016C2.59891 16.9371 2.72 16.8301 2.81579 16.7019L8.40349 9.71737C8.57365 9.50907 8.66667 9.2478 8.66667 8.97817C8.66667 8.70854 8.57365 8.44727 8.40349 8.23898L2.61912 1.25447C2.50306 1.11359 2.35564 1.00223 2.18881 0.929419C2.02197 0.856607 1.84043 0.824394 1.65891 0.835395Z" /></svg></button>',
    infinite: false,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    rows: 0, 
    responsive: [
      {
        breakpoint: 1315,
        settings: {
          infinite: false,
          variableWidth: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          rows: 0, 
        }
      }, 
      {
        breakpoint: 1115,
        settings: {
          infinite: false,
          variableWidth: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          rows: 0, 
        }
      }, 
       
      {
        breakpoint: 871,
        settings: {
          infinite: false,
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          rows: 0, 
        }
      },
    ]  
  });

  $(".featured-inner__nav button").on('click', function () {
    var filter = $(this).data('filter');
    $(".featured-inner__items").slick('slickUnfilter');

    if (filter == 'villa') {
      $(".featured-inner__items").slick('slickFilter', '.featured-inner__villa');
    }
    else if (filter == 'apartment') {
      $(".featured-inner__items").slick('slickFilter', '.featured-inner__apartment');
    }
    else if (filter == 'all') {

      $(".featured-inner__items").slick('slickUnfilter');
    }
     
  }); 
   
  $('.featured-inner__btn').on('click', function () { 
 
    $('.featured-inner__btn').removeClass('featured-inner__btn--active');
    $(this).addClass('featured-inner__btn--active'); 
 
 }); 
  
    $('.ready-to-sell__slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000, 
      pauseOnHover: true,
   }); 
 
$("#star, #star-2, #star-3").rateYo({  
  numStars: 1,
  rating: 1,
  starWidth: "23px",
  ratedFill: "#F59E0B",
  starSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.6048 8.70885C23.5315 8.49286 23.3965 8.30307 23.2166 8.16292C23.0366 8.02277 22.8196 7.93838 22.5922 7.92018L15.941 7.39168L13.0628 1.02052C12.9712 0.815315 12.8221 0.641025 12.6336 0.518684C12.445 0.396343 12.2251 0.331178 12.0004 0.331055C11.7756 0.330932 11.5557 0.395855 11.367 0.517989C11.1783 0.640123 11.0291 0.814249 10.9372 1.01935L8.05901 7.39168L1.40784 7.92018C1.18437 7.93789 0.970738 8.0196 0.792491 8.15554C0.614244 8.29148 0.478935 8.47589 0.402752 8.68672C0.326569 8.89754 0.312738 9.12586 0.362913 9.34434C0.413088 9.56282 0.525145 9.76222 0.685677 9.91868L5.60084 14.7102L3.86251 22.2375C3.80973 22.4654 3.82664 22.7038 3.91107 22.9219C3.99549 23.14 4.14352 23.3278 4.33595 23.4607C4.52837 23.5936 4.75632 23.6657 4.99019 23.6674C5.22407 23.6692 5.45308 23.6007 5.64751 23.4707L12 19.2357L18.3525 23.4707C18.5512 23.6026 18.7856 23.6706 19.0241 23.6653C19.2626 23.6601 19.4937 23.582 19.6865 23.4414C19.8792 23.3009 20.0243 23.1047 20.1022 22.8793C20.1802 22.6538 20.1872 22.4099 20.1223 22.1803L17.9885 14.7137L23.2805 9.95135C23.627 9.63868 23.7542 9.15102 23.6048 8.70885Z" fill="#F59E0B"/></svg>' 

});   
 
 $('.review-inner__slider').slick({
     dots: true, 
     arrows: false,
     speed: 300, 
     variableWidth: true,
     slidesToScroll: 1,
     centerMode: true,  
     centerPadding: '60px',  
      
      responsive: [
       {
         breakpoint: 1038,
         settings: {
           dots: true, 
           arrows: false,
           speed: 300, 
           variableWidth: false,
           slidesToShow: 1, 
           slidesToScroll: 1,
           centerMode: false,  
           centerPadding: '0px',  
         }
       },  
     ]
      
 });

 $('.subscribe__btn').on('click', function(e){ 
  e.preventDefault();
});   

$('.blog__btn').on('click', function(e){ 
  e.preventDefault();
});    
 
$('.ready-to-sell__btn').on('click', function(e){ 
  e.preventDefault();
});   
 
$('.header-inner__input-btn').on('click', function(e){ 
  e.preventDefault();
});     
 
$("#subscribe__form").validate( 
  {
    errorPlacement: function(label, element) {
        label.addClass('arrow');
        label.insertAfter(element);
    },
    wrapper: 'span'
}
);

});  
