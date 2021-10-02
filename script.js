let result = document.getElementById("result");
let button = document.getElementById("button");

function onclick() {
  let r = Math.random();
  if (r < 0.2) {
    result.textContent = "大吉";
    result.style.color = "red";
  } else if (r < 0.7) {
    result.textContent = "吉";
    result.style.color = "black";
  } else {
    result.textContent = "凶";
    result.style.color = "blue";
  }
}

button.onclick = onclick;