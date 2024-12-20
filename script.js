//loading animation
function loadingAnimation() {
      var tl = gsap.timeline();
      tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5,
      });
  
      tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
          var h5Timer = document.querySelector("#line1-part1 h5");
          var grow = 0;
          var interval = setInterval(function () {
            if (grow < 100) {
              h5Timer.innerHTML = grow++;
            } else {
              clearInterval(interval);
            }
          }, 33);
        },
      });
      tl.to('.line h2',{
        animationName:"anime",
        opacity:1
      })
      tl.to("#loader", {
        opacity: 0,
        duration: 0.4,
        delay: 1,
      });
  
      tl.from("#page1", {
        delay: 0.2,
        y: 1600,
        opacity: 0,
        duration: 0.5,
        ease: "power4",
      });
  
      tl.to("#loader", {
        display: "none",
      });
      tl.from("#nav",{
        opacity:0
    })
    tl.from("#hero1 h1 ,#hero2 h1,#hero3 h2 ,#hero4 h1",{
        y:120,
        stagger:0.2
    })
    }
    
  
    // Cursor design
   function cursorAnimation(){
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#crsr",{
          left:dets.x,        //dets is a parameter which is used to get cordinate value of our mouse hover.
          top:dets.y    
        })
      });
    Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
      //Parameters are optional.
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
   }
   loadingAnimation();
   cursorAnimation()