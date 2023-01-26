let buttons = document.querySelectorAll(".nmbr");
let buttonHsb = document.querySelectorAll(".hsb");
let Ac = document.querySelector(".Ac");
let brbr = document.querySelector(".brbr");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let inp = document.querySelector("input");
buttons.forEach((event) => {
  inp.value = "";
  event.addEventListener("click", () => {
    inp.value += event.innerHTML;
  });
});

buttonHsb.forEach((even) => {
  even.addEventListener("click", () => {
    p2.innerHTML = " ";
    p2.innerHTML = even.innerHTML;
    if (even.innerHTML == "-") {
      p1.innerHTML = inp.value;
      inp.value = " ";
    }
    if (even.innerHTML == "*") {
      p1.innerHTML = inp.value;
      inp.value = " ";
    }
    if (even.innerHTML == "/") {
      p1.innerHTML = inp.value;
      inp.value = " ";
    }
    if (even.innerHTML == "+") {
      p1.innerHTML =inp.value
      inp.value = " ";
    }
    
  });
});
inp.value
Ac.addEventListener("click",()=>{
    p1.innerHTML= " "
    p2.innerHTML= " "
    inp.value= " "
})
brbr.addEventListener("click", () => {
  if (p2.innerHTML == "-") {
    inp.value = p1.innerHTML - inp.value;
    p2.innerHTML=" "
  }
  if (p2.innerHTML == "*") {
    inp.value = p1.innerHTML * inp.value;
    p2.innerHTML=" "
  }
  if (p2.innerHTML == "/") {
    inp.value = p1.innerHTML / inp.value;
    p2.innerHTML=" "
  }
  if (p2.innerHTML == "+") {
    inp.value = Number(p1.innerHTML)+Number(inp.value)
  }
});
