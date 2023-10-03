var button = document.querySelector("#btn")
let vlu = 0;
button.addEventListener("click", function () {

  if(vlu === 0){
    btn.innerHTML = "TURN ON"
    btn.style.backgroundColor = "green"
    vlu = 1;
  }
  else{btn.innerHTML = "TURN OFF";
  btn.style.backgroundColor = "white"
  vlu = 0;
  }
})