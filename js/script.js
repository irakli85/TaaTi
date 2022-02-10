$(document).ready(function(){
  $('.slider').slick({
    arrows:true,
    dots:false,
    adaptiveHeight:true,
    /*slidesToShow:3, < რამდენი სლაიდი გაჩვენოს ერთ ჯერზე
    slidesToScroll:3, < რამდენი სლაიდი გადასქროლოს ერთ კლიკზე*/
    speed:500,
    easing:'ease', /*ანიმაციის სტილი*/
    Infinite:true, /*სლაიდის დაუსრულებლობა*/
    initialSlide:0, /*რომელი სლაიდიდან დაიწყოს სქროლვა*/
    autoplay:true,
    autoplaySpeed:1500,
    pauseOnFocus:true,
    pauseOnHover:false,
    pauseOnDotsHover:false,
    draggable:true, /* PC ze mausit sqrolva*/
    swipe:true, /*mobilurze swipi*/
    touchThreshold:5, /*swaipis mandzili*/
    touchMove:true, /*slaideris lentis modzraoba mausit*/
    waitForAnimate:true, /*animaciis dasulebas daelodebs shemdegi slidiststvis*/
  });
});