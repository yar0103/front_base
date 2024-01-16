let userInfo = { id : 'korea', pw : 'abc123@@'}

let boxColor = document.querySelectorAll('.boxColor')
let inputBox = document.querySelectorAll('.inputBox')


let userId = document.getElementById('id');
let userPw = document.getElementById('pw');
let loginBtn = document.getElementById('loginBtn');

let errorMessage = document.querySelector('.errorMessage');

//검증 정규식
let pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/ //영문 숫자 특수기호 조합 4~12자리(검색)
let regex = /(?=.*[a-z])(?=.*[\d])(?=.*[@#$%^&*!?])[a-z\d@#$%^&*!?]+/; //영문 숫자 특수기호 조합 4~12자리(샘)



// for(let i=0; i <inputBox.length; i++){
//   inputBox[i].addEventListener('focus', function(){
//     boxColor[i].classList.add('check')
//   })

//   inputBox[i].addEventListener('blur', function(){
//     boxColor[i].classList.remove('check')
//   })
// } 이거를 아래처럼 바꿔 사용할 수도 있음

//forEach는 배열을 갯수만큼 한개씩 반복해서 적용

inputBox.forEach(function(el, idx){ //e : 해당요소 , i : 인덱스
  el.addEventListener('focus', function(){ //focus : 포커스위치
    boxColor[idx].classList.add('check')
  })
    
  el.addEventListener('blur', function(){ //blur : 포커스벗어남
    boxColor[idx].classList.remove('check')
  })
})

loginBtn.addEventListener('click', ()=>{
  let idValue = userId.value; //인풋상자에 입력한 내용을 변수에 저장
  let pwValue = userPw.value;
  
  if(idValue == '' && pwValue == ''){
    errorMessage.innerHTML = "id 와 pw를 입력해주세요"
  }else if(idValue == ''){
    errorMessage.innerHTML = "id 를 입력해주세요"
  }else if(pwValue == ''){
    errorMessage.innerHTML = "pw 를 입력해주세요"
  }else if(idValue.length < 4 ||  idValue.length < 12){
    errorMessage.innerHTML = "id 는 4~12글자임"
  }else if(!pwCheck.test(pwValue)){
    errorMessage.innerHTML = "pw형식 안맞음"
  }

  if(idValue == userInfo.id && pwValue == userInfo.pw){
    errorMessage.innerHTML = ''
    alert('login ok')
  }else {
    errorMessage.innerHTML = 'id or pw failure /try again'
  }
})




