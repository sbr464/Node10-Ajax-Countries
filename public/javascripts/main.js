$('document').ready(function(){

  $('#loadbutton').click(function(){
    $.get('/countries', function(data){
      data.map(function(item){  
        $('#countrylist').append('<li>'+item.name);
      })
    });
  });


  $('#searchForm').submit(function(e){

    e.preventDefault();

    var searchItem = $('#searchBox').val();

    $('#countrylist').empty();

    $.post('/countryPost', { searchData : searchItem }, 

    function(item){

      if(item){

        $('#countrylist').append('<li>'+item.name);
      
      } else {
   
        $('.container').append('<div class="alert alert-danger" role="alert">' + '<b>' + searchItem + '</b> was not found. </div>')
        
        $('.alert').fadeOut(3000, function(){
        
          $(this).remove();
        
        });
        
      };

    });

    this.reset();

  });

});