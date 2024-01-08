let menu = document.getElementsByClassName('menu');

for(let i=0; i < menu.length; i++){

  menu[i].addEventListener('click', function(){
    let panel = this.nextElementSibling;
    
    menuClose(i,menu) //전체적으로 패널닫기
    menuOpen(menu[i], panel) //클릭 패널 열기
  })
}

//console.log(menu.length)
function menuClose(item){
  for(let j = 0; j < item.length; j++){
    if(i != j){ //i ()= 현재 클릭 요소 순번) 이 아닌것들만 아래 효과 적용
    item[j].nextElementSibling.style.maxHeight = null
    item[j].classList.remove('on');
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

  