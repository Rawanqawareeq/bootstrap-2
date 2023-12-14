
/*const navbar = document.querySelector(".navbar");*/
const headerspan=document.querySelector(".header-content span");
const loading = document.querySelector(".loading");
/*const scrolltop=document.querySelector(".scroll-top");*/
const aboutsection=document.querySelector(".about");
const navlink=document.querySelectorAll(".nav-link");
/*
console.log( headerspan.offsetTop);
window.addEventListener('scroll', function(){
    if(window.scrollY > headerspan.offsetTop){
        navbar.style.backgroundColor="#fff"
    }
    else{
        navbar.style.backgroundColor="transparent"
    }
    if(window.scrollY > aboutsection.offsetTop){
        scrolltop.classList.remove('opacity-0','invisible');

    }
    else{
        scrolltop.classList.add('opacity-0','invisible');

    }
})*/
$('#top').fadeOut()



$(window).scroll(function(){
    if($(window).scrollTop()>150){
        $(".navbar").addClass('bg-white')
        $(".navbar").css(' transition','1s')

    }
       
    else{
        $(".navbar").removeClass('bg-white')
        $(".navbar").css(' transition','1s')
    }
    if($(window).scrollTop()>$('.about').offset().top){
        $('.scroll-top').fadeIn()
}
else{
    $('.scroll-top').fadeOut()
}    
})
$('.scroll-top').click(function(){
    $('html , body').animate({scrollTop:0},200)

})

/*

window.addEventListener("load",function(){
    this.setTimeout(function(){
        loading.classList.add("'opacity-0","invisible");
        document.body.style.overflow='auto';
    },2000)
})
scrolltop.addEventListener("click",function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})*/
$('body').css('overflow','hidden')
$(document).ready(function(){
 $('.loading').fadeOut(4000,function(){
    $('body').css('overflow','auto')
 })
})
/*
for(let i=0;i<navlink.length; i++){
    navlink[i].addEventListener('click',function(e){
        e.preventDefault();
        for(let j=0;j<navlink.length;j++){
        navlink[j].classList.remove("active")
        }
        navlink[i].classList.add("active")
        let currentid=this.getAttribute('href')
        let targetsection=document.querySelector(currentid)
        window.scroll({
            top:targetsection.offsetTop,
            behavior:"smooth"
        })

    })
}*/
$('nav a').click(function(){
   let current = $(this).attr('href');
   let targetsection=$(current).offset().top
  $('html,body').animate({scrollTop:targetsection},200)
  
   
})
$('.theme i').click(function(){
  let  w = $('.option').outerWidth()
  let  left = $('.theme').offset().left
  if(left==0){
    $('.theme').animate({left:-w},2000)
  }
  else{
    $('.theme').animate({left:0},2000)
  }  
})
let color=["#A78295","#8EACCD","#DA0C81","#B0D9B1","#ff724c"]
for(let i=0;i<color.length;i++){
    $('.option li').eq(i).css("backgroundColor",color[i])
   

}
$('.option li').click(function(){
    let bg=$(this).css('background-color')
    $('html').attr('style',`--main-color:${bg}`)
      })


      $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            nav:true,
            items:5,
            autoplay:true,
            loop:true,
            responsiveClass:true,
            responsive:{
                300:{
                    items:1,
                },
                700:{
                    items:2,
                },
                900:{
                    items:5,
                }
            }
        });
      });
    