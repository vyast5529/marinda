// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
//  let t = gsap.timeline();
// t.to("#page1",{
//     y:"100vh",scale:0.5 ,duration:0
// })
// t.to("#page1",{
//     y:"0vh" ,duration:2
// })
// t.to("#page1",{
//     rotate:360,scale:1,duration:0.8})

let c1 = document.querySelector("#dc1");
let c2 = document.querySelector("#dc2");
let c3 = document.querySelector("#dc3");
let c4 = document.querySelector("#dc4");
c3.addEventListener("mouseenter",function(){
    c4.style.position="relative";
    c4.style.right="625px";
    c4.style.transitionDuration="1s"

})
c3.addEventListener("mouseleave",function(){
    c4.style.position="relative";
    c4.style.right="890px";
    c4.style.transitionDuration="1s"
})
c2.addEventListener("mouseenter",function(){
    c3.style.position="relative";
    c3.style.right="340px"
    c3.style.transitionDuration="1s";
    c4.style.position="relative";
    c4.style.right="550px"
    c4.style.transitionDuration="1s";
})
c2.addEventListener("mouseleave",function(){
    c3.style.position="relative";
    c3.style.right="580px"
    c3.style.transitionDuration="1s";
    c4.style.position="relative";
    c4.style.right="890px";
    c4.style.transitionDuration="1s";
})
c1.addEventListener("mouseenter",function(){
    c2.style.position="relative";
    c3.style.position="relative";
    c4.style.position="relative";
    c2.style.right="30px";
    c2.style.transitionDuration="1s"
    c4.style.transitionDuration="1s"
    c3.style.transitionDuration="1s"
    c4.style.right="400px";
   c3.style.right="200px"
    
    
})
c1.addEventListener("mouseleave",function(){
    c2.style.position="relative";
    c3.style.position="relative";
    c4.style.position="relative";
    c2.style.right="290px";
   c4.style.right="890px";
   c3.style.right="580px"

    c2.style.transitionDuration="1s"
    c4.style.transitionDuration="1s"
    c3.style.transitionDuration="1s"

})
gsap.to("#div2 h1",{
    x:"-500vw",duration:60,delay:2,repeat:-1,
})
let al = document.querySelector("#al");
let i = document.querySelector("#al i");
let sp = document.querySelector("#al span");
al.addEventListener("mouseenter",function(){
    i.style.transform="translateX(400px)";
    
    
    sp.style.transform="translateX(400px)";
    i.style.transitionDuration="1s";
    sp.style.transitionDuration="1s";
})
al.addEventListener("mouseleave",function(){
    i.style.transform="translateX(0)";
    
    
    sp.style.transform="translateX(0)";
    i.style.transitionDuration="1s"
    sp.style.transitionDuration="1s";
})