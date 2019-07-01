$(document).ready(function() {

    function wSkills() {

        $('.skill .bar-skill .percent-skill').each(function() {
            $percent =  $(this).data('percent');
            $(this).css('width', $percent + '%');
          });
    }

    wSkills();

  

});