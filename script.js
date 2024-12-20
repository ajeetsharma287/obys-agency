var tl = gsap.timeline()
tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5,
})
tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){             //on start is a predefine function.
        var h5timer = document.querySelector("#line1-part1 h5")
        var grow = 0
       setInterval(function(){      // ye property ek set time ke bad type off loop chalega// .
           if (grow <100){                 // or hamari h5 ki value increase hogi upto 100 tak .
                h5timer.innerHTML = grow++
           }else{
               h5timer.innerHTML = grow
           }
           console.log(grow)
       }, 33)           //33 milisecond 
    },
});
tl.to('.line h2',{
    animationName: "anime",
    opacity:1
})
tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:4
})
tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    duration:0.5,
    ease:power4          // gsap property for animation.
})
tl.to()