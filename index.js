const div = document.getElementById("div");
const add = document.getElementById("add");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

var num = 0;

add.addEventListener("click", () => {
  num++;
  div.textContent = num;
});

decrease.addEventListener("click", () => {
  num--;
  div.textContent = num;
});

reset.addEventListener("click", () => {
  num = 0;
  div.textContent = num;
});
