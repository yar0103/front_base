import member from './member.js'

console.log('test')
console.log("name : " + member[0].이름 + "dear")
console.log(`birthday : ${member[0].이름}`)

//태그생성
let tag ='';

for(let i = 0; i < member.length; i++){
  tag += `<div class="box">
            <p class="name">name : <span>${member[i].이름}</span></p>
            <p class="birth">birth : <span>${member[i].생일}</span></p>
            <p class="major">major : <span>${member[i].전공}</span></p>
            <p class="hobby">hobby : <span>${member[i].관심사}</span></p>
          </div>`;
}

//선택하고
let member_wrap = document.querySelector('.member .wrap');
member_wrap.innerHTML = tag //여기서 출력해줌

document.getElementsByClassName('name-1')[0].innerHTML = member[0].이름