function lenis(){
  const lenis = new Lenis({
    lerp: 0.08,       
    smooth: true,     
    direction: 'vertical', 
    gestureDirection: 'vertical',
    smoothTouch: false, 
    wheelMultiplier: 1, 
    touchMultiplier: 1, 
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
}
// lenis();


let toggle = true;

function menu() {
  let close = document.querySelector("#close");
  let menu = document.querySelector("#menu");
  let nav2 = document.querySelector("#nav2");
  nav2.addEventListener("click", function() {
    if (toggle) {
      gsap.to(close, {
        top: "25%",
        opacity: 1
      });
      gsap.to(menu, {
        y: 40,
        opacity: 0
      });
    } else {
      gsap.to(close, {
        top: "-100%",
        opacity: 0
      });
      gsap.to(menu, {
        y: 0,
        opacity: 1
      });
    }
    toggle = !toggle;
  });
}
menu();

function scroll() {
  let mainHead = document.querySelector("#mainHead");
  let miniHead = document.querySelector("#miniHead");
  let nav1 = document.querySelector("#nav1");
  if (window.innerWidth < 300) {
    gsap.to(mainHead, {
      y : "-100%",
      duration: 0.3,
      opacity: 0,
      scrollTrigger: {
        trigger: "#main",
        start: "6% 10%",
        toggleActions: "play none none reverse"
      }
    });
    gsap.to(miniHead, {
      y : "-100%",
      duration: 0.3,
      opacity: 1,
      scrollTrigger: {
        trigger: "#main",
        start: "6% 10%",
        toggleActions: "play none none reverse"
      }
    });
  } 
   else if (window.innerWidth < 1024 && window.innerWidth >=300) {
    gsap.to([mainHead, miniHead], {
      y: -20,
      duration: 0.3,
      scrollTrigger: {
        trigger: "#main",
        start: "6% 10%",
        toggleActions: "play none none reverse"
      }
    });
  } 
  else if (window.innerWidth >= 1024 && window.innerWidth < 1279) {
    gsap.to([mainHead, miniHead], {
      y: -25,
      duration: 0.3,
      scrollTrigger: {
        trigger: "#main",
        start: "6% 10%",
        toggleActions: "play none none reverse"
      }
    });
  } 
  else if(window.innerWidth >=1280 && window.innerWidth < 1536) {
    gsap.to([mainHead, miniHead], {
      y: -33.5,
      duration: 0.3,
      scrollTrigger: {
        trigger: "#main",
        start: "6% 10%",
        toggleActions: "play none none reverse"
      }
    });
    }
    else if (window.innerWidth >=1536){
      gsap.to([mainHead, miniHead], {
        y: -38,
        duration: 0.3,
        scrollTrigger: {
          trigger: "#main",
          start: "6% 10%",
          toggleActions: "play none none reverse"
        }
      });
    }
}
scroll();


function mouseScroll() {
  const swiper = document.getElementById("main-swiper");

  let isDown = false;
  let startX;
  let scrollLeft;

  swiper.addEventListener("mousedown", e => {
    isDown = true;
    swiper.classList.add("active"); 
    startX = e.pageX - swiper.offsetLeft;
    scrollLeft = swiper.scrollLeft;
  });

  swiper.addEventListener("mouseleave", () => {
    isDown = false;
    swiper.classList.remove("active");
  });

  swiper.addEventListener("mouseup", () => {
    isDown = false;
    swiper.classList.remove("active");
  });

  swiper.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - swiper.offsetLeft;
    const walk = (x - startX) * 2; // *2 = scroll speed
    swiper.scrollLeft = scrollLeft - walk;
  });
}
mouseScroll();


let first = document.querySelector(".first");
let second = document.querySelector(".second");

function split(element) {
  let el = element;
  let text = el.innerText;
  el.innerText = ""; 

  text.split("").forEach(function(e) {
    const span = document.createElement("span");
    span.innerText = e;
    span.style.display = "inline-block";
    el.append(span);
  });
}

split(first);
split(second);

function hoverAnimation() {
  let wrapper = document.querySelector(".text-wrapper");
  let firstSpan = first.querySelectorAll("span");
  let secondSpan = second.querySelectorAll("span");

  wrapper.style.width = first.offsetWidth + "px";

  wrapper.addEventListener("mouseenter", function () {
    gsap.to(firstSpan, {
      opacity: 0,
      y: "-100%",  
      stagger: 0.03,
      ease: "power2.out"
    });
    gsap.to(secondSpan, {
      opacity: 1,
      y: "-100%",  
      stagger: 0.03,
      ease: "power2.out"
    });
    wrapper.style.width = second.offsetWidth + "px";
  });

  wrapper.addEventListener("mouseleave", function () {
    gsap.to(firstSpan, {
      opacity: 1,
      y: "0%",  
      stagger: 0.03,
      ease: "power2.out"
    });
    gsap.to(secondSpan, {
      opacity: 0,
      y: "100%",  
      stagger: 0.03,
      ease: "power2.out"
    });
    wrapper.style.width = first.offsetWidth + "px";
  });
}

hoverAnimation();


function menuDiv(){
  let menuBtn = document.querySelector("#nav2");
  let menuDiv = document.querySelector("#menu-div")
  let invisible = document.querySelectorAll(".invisible");
  let tag = document.querySelectorAll("#menu-div ul li a");
  let body = document.querySelector("body");
  let btnToggle = true;
  menuBtn.addEventListener("click", function (){
    if(btnToggle){
      gsap.to(menuDiv,{
        top: "0%",
        display: "block",
      })
      gsap.from(invisible,{
        opacity:0,
        duration: 1.8,
        ease: "power2.out"
      })
      gsap.from(tag,{
        y: -140,
        duration: 1.1,
        ease: "power2.out"
      })
      body.style.overflow = "hidden";
    }
    else{
      gsap.to(menuDiv,{
        top: "-100%",
        display: "none",
      })
      body.style.overflow = "";
    }
    btnToggle = !btnToggle;
  })
}
menuDiv();


// gsap Animation Start here
function hero(){
  let navLeft = document.querySelector("#nav1");
  let navRight = document.querySelector("#nav2");
  let talk = document.querySelector("#talk");
  let tabs = document.querySelector("#tabs-nav")
  let upVideo =document.querySelector("#upper-video");
  let tl = gsap.timeline();
  tl.from(navLeft,{
    x: "-100%",
    opacity: 0,
    duration: 1,
    delay: 0.9,
  }, "a")
  tl.from(navRight,{
    x: "100%",
    opacity: 0,
    delay: 0.9,
  },"a")
  tl.from(talk,{
    x: "100%",
    opacity: 0,
    delay: 0.9,
  },"a")
  tl.from(tabs,{
    opacity: 0,
    delay: 0.9,
  },"a")
  tl.from(upVideo,{
    y: "100%",
    opacity: 0,
    delay: 0.9,
  },"a")
}
hero();

function paraAni(){
  let para = document.querySelector("#ani-para");
  let tempPara = para.innerText;
  para.innerText = "";
  let words =tempPara.split(" ")
  let container = "";
  words.forEach((w) =>{
    container+= `<span>${w}</span>`
  })
  para.innerHTML = `${container}  <span id="service">See our services.</span>`;
  
  let page2 = document.querySelector("#page2");
  let afterLeft = document.querySelector("#after-left");
  let paraSpan = document.querySelectorAll("#ani-para span")
  gsap.from(paraSpan,{
    y: "-100%",
    opacity: 0,
    stagger: 0.1,
    duration: 0.3,
    scrollTrigger: {
      trigger : page2,
      start: "50% 10%",
      toggleActions: "play none none none",
    }
  })
  gsap.from(afterLeft,{
    opacity: 0,
    delay: 0.3,
    scrollTrigger: {
      trigger : page2,
      start: "50% 10%",
      toggleActions: "play none none none",
    }
  })
}
paraAni();


function rejouice(){
  let head = document.querySelector("#hero-head");
  let dupHead = head.innerText;
  head.innerText = "";
  let piece = dupHead.split("");
  let con = "";
  
  piece.forEach((e) => {
    con += `<span>${e}</span>`;
  })
  head.innerHTML = con;

  // Select all span elements
  let spans = document.querySelectorAll("#hero-head span");
  
  // Apply GSAP animation to all spans
  gsap.from(spans, {
    y: "-130vh",          // Letters will start from above
    stagger: 0.1,     // Delay between each letter's animation
    duration: 1,      // Duration of each animation
    ease: "power3.out" // Ease out effect for smooth animation
  });
}

rejouice();

