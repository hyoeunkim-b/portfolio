// 브라우저 닫기
document.querySelector('#pageClose').addEventListener('click', () => window.close());

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

window.addEventListener("load", function () {
  Locoscroll.update();
});

// 프로젝트 타이틀 부분
const projectTitles = document.querySelectorAll('#projectTitle');
projectTitles.forEach( (projectTitle, index) => { 
  gsap.to(projectTitle, 1.5, {
    delay: index * 1,
    opacity: 1, 
    y: 0
  })
});
const projectTitleBgs = document.querySelectorAll('#projectTitleBg');
projectTitleBgs.forEach( (Bg, index) => { 
  gsap.to(projectTitleBg, 1.5, {
    delay: index * 1,
    opacity: 1, 
    y: 0
  })
});

// 본문 부분
const sectionProjects = document.querySelectorAll('#sectionProjects');
sectionProjects.forEach( (sectionProject, index) => { 
  gsap.to(sectionProject, 1.5, {
    delay: index * 1,
    borderRadius : 0,
    y: 0
  })
});
