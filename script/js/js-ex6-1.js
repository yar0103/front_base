/*책정보를 저장하는 객체 생성하기

객체명 : book
id : 숫자 일련번호
title : 책제목-문자열
author : 작가이름 - 문자열
price : 책가격-숫자
eventItem : true-boolean
showInfo 메서드

*/

let book = {
  id : 101,
  title : 'Harry Potter',
  author : 'J.K Rowling',
  price : 35000,
  eventItem : true,
  showInfo : function() {
    console.log(this)
  }
}

book.showInfo()

//객체 해체하기 - distructuring
//키값과 동일한 변수에 값을 할당하기
let {id, title, author, price, eventItemItem} = book

//id가 callBookInfo 버튼 클릭시 book 객체를 해체한 변수의 값을 가지고 콘솔창에 출력하기

// 1) addEvenListener - 화살표 함수 사용,
// 2) 출력할 때 Template Literal 방식을 사용하여 출력
// 3) 이벤트 진행 책이면 - 10% 할인 진행중 -이라고 출력
// 4) 객체를 매개변수로 받아서, 해체해서 사용하기

let callBookInfo = document.getElementById('callBookInfo')
let bookInfo = document.getElementById('bookInfo')

callBookInfo.addEventListener('click', ()=>{

  let {id, title, author, price, eventItem} = book
  let eventTxt = (eventItem) ? "10% 할인 진행중" : ""

  let tag =`
    <li><span>title</span><span>${title}</span></li>
    <li><span>author</span><span>${author}</span></li>
    <li><span>price</span><span>${price}</span></li>
    <li><span>eventItem</span><span>${eventTxt}</span></li>
  `
  //console.log(`${title} ${author} ${price} ${eventItem}`)
  bookInfo.innerHTML = tag
})

