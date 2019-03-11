const designsArraySrc = [
  "images/01.jpg",
  "images/02.jpg",
  "images/03.jpg",
  "images/04.jpg",
  "images/05.jpg",
  "images/06.jpg",
  "images/07.jpg",
  "images/08.jpg",
  "images/09.jpg",
  "images/10.jpg",
  "images/11.jpg",
  "images/12.jpg"
];

$(document).ready(function() {
  $(designsArraySrc).each(function(i,e) {
    $(".container").append( 
      '<div class="box"><img class="image-design" id="image'+i+'" src="'+designsArraySrc[i]+'"></div>'
      )

      $("#image"+ i).on("click", function () {
        let imageSrc = $("#image"+ i).attr('src');
        $(".image-display").attr("src",imageSrc);
        $("#tpopup").fadeIn('slow');
         $('.head-line').css("opacity", ".5");
         $('.nav-bar').css("opacity", ".5");
         $('.container').css("opacity", ".5");
        
      });

    });
     
    $("#tclose").click(function() {
        $("#tpopup").fadeOut();
        $('.head-line').css("opacity", "1");
        $('.nav-bar').css("opacity", "1");
        $('.container').css("opacity", "1");
        $(".image-display").removeAttr("src");
    });
    

});






