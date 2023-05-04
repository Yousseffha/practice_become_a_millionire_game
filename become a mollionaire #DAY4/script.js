let btn = document.getElementById("btn");
let clicksNumber = document.getElementById("clicks-number");
let firstBox = document.getElementById("F-BOX");
let secondtBox = document.getElementById("S-BOX");
let background = document.getElementById("B-G");
let behind = document.getElementById("behind")
let replay = document.getElementById("replay")
let share = document.getElementById("share")
let more = document.getElementById("more")

if (Number(clicksNumber.innerHTML) < 100) {
  secondtBox.style.display = "none";
}

btn.onclick = function () {
    behind.classList.add("behind-animation")
    btn.onmousedown = function() {
      behind.classList.remove("behind-animation")
    }

  if (Number(clicksNumber.innerHTML) < 100) {
    clicksNumber.innerHTML = Number(clicksNumber.innerHTML) + 1;
  } else {
    clicksNumber.innerHTML = 0;
  }

  if (Number(clicksNumber.innerHTML) >= 100) {
    firstBox.style.display = "none";
    secondtBox.style.display = "block";
    secondtBox.classList.add("not-hidden")
  }

  if (secondtBox.classList.contains("not-hidden")) {
    setInterval(function () {
      let moneyBill = document.createElement("span");
      moneyBill.classList.add("money-bill")
      moneyBill.innerHTML = '<i class="fa-solid fa-money-bill-wave"></i>';
      background.append(moneyBill);
    }, 10);
  }else {
    background.innerHTML = ""
  }

  replay.onclick = function() {
    firstBox.style.display = "block"
    secondtBox.style.display = "none"
    secondtBox.classList.remove("not-hidden")
    clicksNumber.innerHTML = "0"
  }
};

share.onclick = function() {
  window.open("https://twitter.com/intent/tweet?text=i%27m%20a%20millionaire%20now")
}


more.onclick = function() {
  background.style.overflow = "visible"
}