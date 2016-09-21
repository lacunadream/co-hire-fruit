  $(document).ready(function(){
    $('#hideshow').on('click', function(event) { 
        $(this).html(function(i, text) {
          var ori = '<span>show less </span><span class="glyphicon glyphicon-menu-up" aria-hidden="true"></span>'
          var change = '<span>show more </span><span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>'
          return text === change ? ori : change;
        })     
        $('#ratings').toggle('show');
    });


});