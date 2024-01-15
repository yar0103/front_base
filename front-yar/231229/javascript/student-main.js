import student from "./student.js";

let wrap = document.querySelector('.wrap')
let tag = ''


for(let i =0; i < student.length; i++){

  let arr = ['','','']
  let obj_len = Object.keys(student[i].score).length; //객체의 key의 갯수 구하는 방법
  let total = 0;

  arr[0] = `
    <div class="box">
      <p><span>학번 : </span><span>${student[i].id}</span></p>
      <p><span>이름 : </span><span>${student[i].name}</span></p>
      <p><span>취미 : </span><span>${student[i].hobby}</span></p>
      <p><span>성적 : </span><span>`
      
  for(let key in student[i].score){
    total += student[i].score[key]
    arr[1] += `<spna>${key} - ${student[i].score[key]}</span>`
  }

  arr[2] = `</span></p>
    <p><span>합계</span><span>${total}</span></p>
    <p><span>평균</span><span>${Math.round(total/obj_len, 2) / 10}</span></p>
    </div>`

  tag += arr[0] + arr[1] + arr[2]
}

wrap.innerHTML = tag

