
$(document).ready(function() {

    //Header
    $('.toggle-button').click(function() {
        $('.nav-header').slideToggle();
    })

    function wSkills() {

        $('.skill .bar-skill .percent-skill').each(function() {
            $percent =  $(this).data('percent');
            $(this).css('width', $percent + '%');
          });
    }

    wSkills();

    function createItem(nombreProyecto, nombreCliente, categoria, recurso, link) {
            var cadena='';

                cadena += '<div class="col-12 col-md-4 container-item-gallery" data-category='+ categoria +'>';
                cadena += ' <div class="item-gallery">';
                cadena += '<img src="img/portafolio/'+ recurso +'" alt="" class="img-fluid">';
                cadena += '<div class="caption-gallery">';
                cadena += '<div class="info-portfolio">';
                cadena += '<a href='+ link +' class="button-link button-link-dark" target="_blank"><i class="fas fa-link"></i></a>';
                cadena += '<h5 class="work">' + nombreProyecto + '</h5>';
                cadena += '<p class="customer">' + nombreCliente + '</p>';
                cadena += '</div>'; 
                cadena += '</div>'; 
                cadena += '</div>'; 
                cadena += '</div>';            
                                
                divItem = $(cadena);
            $('.container-gallery').prepend(divItem);
    }
    
    function traerDatos(){
        //console.log('dentro de la función');

        const xhttp = new XMLHttpRequest();

        xhttp.open('GET','gallery.json', true);

        xhttp.send();

        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                //console.log(this.responseText);
                let datos = JSON.parse(this.responseText);
                //console.log(datos);
                
                for(let item of datos){
                    createItem(item.nameProject, item.nameClient, item.dataCategory, item.urlImage, item.sourceImage);
                }
            }
        }
    }

    traerDatos();

    function filterCategory() {
       $('.nav-categories .nav-link').click(function(e) {
           e.preventDefault();
           $('.nav-categories .nav-link').removeClass('active');
           $(this).addClass('active');

           $category = $(this).data('category');

           if ($category == 'all-items') {
            $('.container-item-gallery').fadeIn();
           } else {
                $('.container-item-gallery').fadeOut();
                $categoriaItem = $('.container-item-gallery').data('category');

                $('.container-item-gallery[data-category*='+ $category +']').fadeIn();
           }
       });
    }

    filterCategory();

    //Owl Carousel

    $('.owl-carousel').owlCarousel({
        
        autoplay: true,
        autoplayTimeout: 3000,
        slideTransition: 'linear',
        loop: true,
        responsive:{
            0:{
                items: 1
            },

            480:{
                items: 6
            },

            768:{
                items: 8
            }
        }
    });

    //SmoothScroll

    $('html').smoothScroll();


    
});