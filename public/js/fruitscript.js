
    $('#hideshow').on('click', function(event) { 
        $(this).html(function(i, text) {
          var oriHTML = '<span>show less</span><span class="glyphicon glyphicon-menu-up" aria-hidden="true"></span>'
          var changeTo = '<span>show more</span><span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>'
          return text === changeTo ? oriHTML : changeTo;
        })     
        $('#ratings').toggle('show');
    });
