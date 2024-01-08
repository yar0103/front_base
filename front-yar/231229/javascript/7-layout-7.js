let menu = document.getElementsByClassName('question');

for(let i =0; i < menu.length; i++){
  menu[i].addEventListener('click', function(){
    let panel = this.nextElementSibling;
    
    menuOpen(menu[i], panel);
    menuClose(i, menu);
    
  })


//menu close
function menuClose(i, menu){
  for(let j = 0; j < menu.length; j++){
    if(i != j){ //i ()= 현재 클릭 요소 순번) 이 아닌것들만 아래 효과 적용
    menu[j].nextElementSibling.style.maxHeight = null
    menu[j].classList.remove('on');
    }
  }
}


//menu open
function menuOpen(menu, panel){
  if(panel.style.maxHeight){
    panel.style.maxHeight = null
    menu.classList.remove('on');
  }else{
    panel.style.maxHeight = panel.scrollHeight + "px"
    menu.classList.add('on');
  }
}
}


