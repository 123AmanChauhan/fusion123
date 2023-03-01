function counter() {
    var count = setInterval(function () {
        var c = parseInt($(".wrap6 .counter").text());
        $(".wrap6 .counter").text((++c).toString());
        if (c == 95000) {
            clearInterval(count)
        }
    }, 60)
}
counter();

function counter1() {
    var count = setInterval(function () {
        var c = parseInt($(".wrap6 .counter1").text());
        $(".wrap6 .counter1").text((++c).toString());
        if (c == 5000) {
            clearInterval(count)
        }
    }, 60)
}
counter1();
function counter2() {
    var count = setInterval(function () {
        var c = parseInt($(".wrap6 .counter2").text());
        $(".wrap6 .counter2").text((++c).toString());
        if (c == 460) {
            clearInterval(count)
        }
    }, 60)
}
counter2();
function counter3() {
    var count = setInterval(function () {
        var c = parseInt($(".wrap6 .counter3").text());
        $(".wrap6 .counter3").text((++c).toString());
        if (c == 3) {
            clearInterval(count)
        }
    }, 1960)
}
counter3();



// $('.responsive-testi').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
      
//     ]
//   });
          
document.querySelector(".wrap0_1 button").addEventListener("click", function(){
  document.querySelector(".wrap0 form").style.display="block"
})
document.querySelector(".cross").addEventListener("click",function(){
     document.querySelector(".wrap0 form").style.display="none"
 })


// $(document).ready(function(){
//   $(".icon-but").click(function(){
//       $(".o").toggle(500)
//   })
// })

// $(document).ready(function(){
//   $(".service").click(function(e){
//       e.preventDefault();
//       if($(this).next(".inner").is(":hidden")){
//           $(".inner").slideUp();
//           $(this).next(".inner").slideDown();
//       }
//       else{
//           $(this).next(".inner").slideUp();
//       }
//   });
//   $(".service").focusout(function(e){
//       $(".inner").slideUp();
//   })
// })