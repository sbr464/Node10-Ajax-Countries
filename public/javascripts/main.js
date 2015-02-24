$('document').ready(function(){

  $('#loadbutton').click(function(){
    $.get('/countries', function(data){
      data.map(function(item){  
        $('#countrylist').append('<li>'+item.name);
      })
    });
  });
  
});