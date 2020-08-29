const images = ["antte.jpg", "antte2.jpg", "antte3.jpg"]
const currentState = {
  currentImgIndex: 0
}
document.querySelector(".banner-btn")
.addEventListener('click', evt => {
  document.querySelector('.banner').style.display = 'none'
  document.querySelector(
      '.form-container').style.cssText = 'opacity:1;visibility:visible';
  document.querySelector(".container").style.background = '#cc683c';
})

document.querySelector('.x-btn').addEventListener('click', evt => {
  document.querySelector('.banner').style.display = 'flex'
  document.querySelector(
      '.form-container').style.cssText = 'opacity:0;visibility:hidden';
  document.querySelector(
      ".container").style.cssText = 'background: linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)), url("images/bg.jpg") no-repeat center;background-size: cover;';
});

document.querySelector('.header  .left-arrow').addEventListener(
    'click', evt => {
      currentState.currentImgIndex = ((currentState.currentImgIndex - 1)
          + images.length) % images.length
      changeBG()
    });
document.querySelector('.header  .right-arrow').addEventListener(
    'click', evt => {
      currentState.currentImgIndex = (currentState.currentImgIndex + 1)
          % images.length
      changeBG()
    });

function changeBG() {
  document.querySelector(
      '.header .header-content').style.cssText = `background:linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url("images/${images[currentState.currentImgIndex]}") center no-repeat;background-size: cover;`
}