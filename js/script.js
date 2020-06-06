$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(700).fadeOut('slow');
});


let openMenu = document.querySelector(".go-menu");
let yachtMenu = document.querySelector(".yacht-menu");
let closeMenu = document.querySelector(".menu-close")
let yachtSearch = document.querySelector(".yacht-serch");
let yachtSearchBlock = document.querySelector(".yacht-search-block");
let closeSearchBlock = document.querySelector(".search-close-button");
let yachtName = document.querySelector(".yacht-name");
let yachtNameBtn = document.querySelector(".yacht");
let closeNameBlock = document.querySelector(".name-close-button");

openMenu.addEventListener("click", function(){
    yachtMenu.style.top = "0"
})

closeMenu.addEventListener("click", function(){
    yachtMenu.style.top = "-500px"
})

yachtSearch.addEventListener("click", function(){
    yachtSearchBlock.style.top = "0"
    yachtMenu.style.top = "-500px"
    yachtName.style.top = "-500px"
})

closeSearchBlock.addEventListener("click", function(){
    yachtSearchBlock.style.top = "-500px"
})

yachtNameBtn.addEventListener("click", function(){
    yachtSearchBlock.style.top = "-500px"
    yachtMenu.style.top = "-500px"
    yachtName.style.top = "0"
})

closeNameBlock.addEventListener("click",function(){
    yachtName.style.top = "-500px"
})











