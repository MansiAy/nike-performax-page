var tl = gsap.timeline()
gsap.set(".a",{y:10,opacity:0})
gsap.set("#right #img",{scale:.5 ,opacity:0})
gsap.set(".sample",{opacity:0})
tl
.from("#left",{
       width:0,
       duration:2,
       ease:Expo.easeInout,
})
.from("#right",{
       width:0,
       duration:1,
       delay:-.1,
       ease:Expo.easeInout,
})
.to(".a",{
       y:0,
       opacity:1,
       stagger:.18,
       duration:1,   
       ease:Expo.easeInout,
})
.to("#img",{
       scale:1,
       ease:Expo.easeInout,
       opacity:1,
       duration:1,
       stagger:.18
})
.to(".sample",{
       opacity:1,
       stagger:.15,
       duration:1,   
       ease:Expo.easeInout,
})

