$(document).ready(function() {

    function wSkills() {

        $('.skill .bar-skill .percent-skill').each(function() {
            $percent =  $(this).data('percent');
            $(this).css('width', $percent + '%');
          });
    }

    wSkills();
    

    $('.item-gallery').hover(function() {
       $itemClass = $(this).attr('class');
       $button = $($itemClass + ' .button-link');

       $button.removeClass('button-link-dark');
       
    })

  

});