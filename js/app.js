$(document).ready(function() {
  $('.btnImagenModal').on('click',function(e) {
    e.preventDefault();
    var imagen = $(this).attr('data-imagen');
    var modal = $(this).attr('data-modal');
    $('#img-modal'+modal).attr('src','img/trabajos/'+imagen+'.jpg');
  });
});