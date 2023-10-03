var button = document.querySelector("#btn")
let vlu = 0;
button.addEventListener("click", function () {

  if(vlu === 0){
    btn.innerHTML = "TURN ON"
    let img = document.querySelector("#photo")
    img.setAttribute("src", "bulb-on.png")
    vlu = 1;
  }
  else{btn.innerHTML = "TURN OFF";
  btn.style.backgroundColor = "white"
  let img = document.querySelector("#photo")
    img.setAttribute("src", "bulb-off.png")
    
  vlu = 0;
  }
})