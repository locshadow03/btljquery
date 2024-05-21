
// $(document).ready(function(){
//     var stt = 0;
//     var numOfSlides = $(".slide .sl").length;

//     function nextSlide() {
//         if(++stt >= numOfSlides){
//             stt = 0;
//         }
//         showSlide();
//     }

//     function showSlide() {
//         // $(".slide .sl").animate({opacity: "0.7"},"slow", function(){
//         //     $(".slide .sl").addClass("d-none").eq(stt).removeClass("d-none").animate({opacity: 1});
//         // });
//         $(".slide .sl").addClass("d-none").hide();
//         $(".slide .sl").eq(stt).removeClass("d-none").show();
//         $(".dot").removeClass("active");
//         $(".dot").eq(stt).addClass("active");
//     }

//     var interval = setInterval(nextSlide, 2000);
//     $(".dot").click(function(){
//         clearInterval(interval);
//         stt = $(this).attr("idx");
//         showSlide();
//         interval = setInterval(nextSlide, 2000);
//     });
// });

$(document).ready(function(){
    var stt = 0;
    var numOfSlides = $(".slide .sl").length;

    function nextSlide() {
        if(++stt >= numOfSlides){
            stt = 0;
        }
        showSlide();
    }

    function prevSlide() {
        if(--stt < 0){
            stt = numOfSlides - 1;
        }
        showSlide();
    }

    function showSlide() {
        var newTransform = 'translateX(' + (-stt * 100) + '%)';
        $(".slide .sl").removeClass("active");
        $(".slide .sl[idx='" + stt + "']").addClass("active");
        $(".pagination .dot").removeClass("active");
        $(".pagination .dot[idx='" + stt + "']").addClass("active");
    }

    var interval = setInterval(nextSlide, 2000);

    $(".dot").click(function(){
        clearInterval(interval);
        stt = parseInt($(this).attr("idx"));
        showSlide();
        interval = setInterval(nextSlide, 2000);
    });

    $(".carousel-control-prev").click(function(){
        clearInterval(interval);
        prevSlide();
        interval = setInterval(nextSlide, 2000);
    });

    $(".carousel-control-next").click(function(){
        clearInterval(interval);
        nextSlide();
        interval = setInterval(nextSlide, 2000);
    });
});


$(document).ready(function(){
    $(".nav-item").mouseenter(function(){
        $(this).addClass("active");
    });
    $(".nav-item").mouseleave(function(){
        $(this).removeClass("active");
    });
});

var logoICPC = document.querySelector('.logoICPC');

window.addEventListener('resize', function() {
    if (window.innerWidth <= 1100) {
        logoICPC.style.display = 'none';
    } else {
        logoICPC.style.display = 'block';
    }
});

if (window.innerWidth <= 1100) {
    logoICPC.style.display = 'none';
}



