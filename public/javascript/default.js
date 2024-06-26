// 모바일 메뉴 버튼
const hamBtn = document.querySelector('#hamBtn');
const mobileMenu = document.querySelector('#mobileMenu');
hamBtn.addEventListener('click', () => {
  hamBtn.classList.toggle('active');
  mobileMenu.classList.toggle('slide');
});

document.addEventListener('click', (event) => {
  const isClickInsideMenu = mobileMenu.contains(event.target);
  const isClickOnHamBtn = hamBtn.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamBtn) {
    hamBtn.classList.remove('active');
    mobileMenu.classList.remove('slide');
  }
});


// Locomotive Scroll
const Locoscroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  multiplier: 0.5,
  getDirection: true,
  firefoxMultiplier: 50,
  mobile: {smooth: true},
  tablet: {smooth: true}
});

// main visual
const mainSlogans = document.querySelectorAll('#slogan');
mainSlogans.forEach( (mainSlogan, index) => { 
  gsap.to(mainSlogan, 1.5, {
    delay: index * 1,
    opacity: 1, 
    y: 0
  })
});

const sloganDescriptions = document.querySelectorAll('#sloganDiscription');
sloganDescriptions.forEach( (sloganDescription, index) => { 
  gsap.to(sloganDescription, 1.5, {
    delay: index * 1,
    opacity: 1, 
    x: 0
  })
});


// about
const scrollEls = document.querySelectorAll('.scrollEl')
scrollEls.forEach( (scrollEl) => {
  new ScrollMagic
  .Scene({
    triggerElement: scrollEl,
    triggerHook: 0.7
  })
  .setClassToggle(scrollEl, 'show')
  .addTo(new ScrollMagic.Controller)
})

// work
const workScrollEls = document.querySelectorAll('.workScrollEl')
workScrollEls.forEach( (workScrollEl) => {
  new ScrollMagic
  .Scene({
    triggerElement: workScrollEl,
    triggerHook: 0.7
  })
  .setClassToggle(workScrollEl, 'scale')
  .addTo(new ScrollMagic.Controller)
})

// contact
const contactScrollEls = document.querySelectorAll('.contactScrollEl')
contactScrollEls.forEach( (contactScrollEl) => {
  new ScrollMagic
  .Scene({
    triggerElement: contactScrollEl,
    triggerHook: 0.7
  })
  .setClassToggle(contactScrollEl, 'video-bigger')
  .addTo(new ScrollMagic.Controller)
})

// 햄버튼 메뉴 클릭시 스크롤
const anchors = document.querySelectorAll('.menu-anchor');
anchors.forEach((anchor) => {
  anchor.addEventListener('click', (e)=>{
    e.preventDefault();
    const target = e.target.hash;
    Locoscroll.scrollTo(target);
  }); 
});

window.addEventListener("load", function () {
  Locoscroll.update();
});