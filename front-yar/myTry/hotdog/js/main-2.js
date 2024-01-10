import hotdog from "./hotdog.js";

let hotdog_wrap = document.querySelector('.hotdog .wrap')
let result = '';

for(let i =0; i < hotdog.length; i++){

  let newtag = (hotdog[i].new) ? '<span class="new">New</span>' : ''
  let besttag = (hotdog[i].best) ? '<span class="best">Best</span>' : ''
  let img_src = 'img/img0' + i + ".png"
  
  let tag = ['','',''];
  tag[0] = `<div class="box">
          <img src="${img_src}" alt="${hotdog[i].title}
          <p class="name">
            ${hotdog[i].title}<br>
            ${newtag}
            ${besttag}
          </p>
          <p>${hotdog[i].content}</p>
          <p class="hashtag">`
            
  for(let j=0; j < hotdog[i].hashtag.length; j++){
    tag[1] += `<span>${hotdog[i].hashtag[j]}</span>`
  }
  
  
  tag[2] = `</p></div>`

  result += tag[0] + tag[1] + tag[2]
}
hotdog_wrap.innerHTML = result; //출력하는 중요코드