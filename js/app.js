const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

parallax_el.forEach((item) => {
  item.style.transform = `
  translateX(-50%) 
  translateY(-50%)
  perspective(2300px)
  translateZ(0)
  `;
})

window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  parallax_el.forEach((item) => {
    let speedx = item.dataset.speedx;
    let speedy = item.dataset.speedy;
    let speedz = item.dataset.speedz;
    let isLeftSide = parseFloat(getComputedStyle(item).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue = (e.clientX - parseFloat(getComputedStyle(item).left)) * isLeftSide * 0.1;

    item.style.transform = `
    translateX(calc(-50% - ${xValue * speedx}px)) 
    translateY(calc(-50% - ${yValue * speedy}px))
    perspective(2300px)
    translateZ(${zValue}px)
    `;
  })
})
