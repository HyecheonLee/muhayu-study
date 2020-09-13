const heading = "우리의 강쥐들~";
let i = 0;
const typing = () => {
  if (i < heading.length) {
    document.querySelector('.heading').innerHTML += heading.charAt(i);
    i++;
    setTimeout(typing, 150);
  }
}
typing()