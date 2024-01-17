let userInfo = { id : 'korea', pw : 'abc123@@'}

let boxColor = document.querySelectorAll('.boxColor')
let inputBox = document.querySelectorAll('.inputBox')


let userId = document.getElementById('id');
let userPw = document.getElementById('pw');
let loginBtn = document.getElementById('loginBtn');

let errorMessage = document.querySelector('.errorMessage');



inputBox.forEach(function(el, idx){ 
  //값이 변경될때마다 발생하는 이벤트 input
  el.addEventListener('input', function(){ 
    if(el.value){
      //el.value -값을 입력하게되면 = 값0 = true
      //값이 없으면 - false
      boxColor[idx].classList.add('check')
    }else{
      boxColor[idx].classList.remove('check')
    }
  })

  
})





