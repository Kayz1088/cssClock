const secondHand = document.querySelector('.seconds-hand');
const minsHand = document.querySelector('.mins-hand');
const hoursHand = document.querySelector('.hours-hands')


function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegree = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const mins = now.getMinutes();
  const minsDegree = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegree}deg)`;

  const hours = now.getHours();
  const hoursDegree = ((hours / 12) * 360) + 90;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`
}

setInterval(setDate, 1000);