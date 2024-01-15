/*
  -지난시간 : 객체 데이터 만들어서 html과 함게 출력
  -
  -함수에대한것
  -자바스크립트 최신문법
*/

/*
  자바스크립트 기본
  변수 : 값이 저장될 수 있는 메모리 공간 - 값 변경o
  상수 : 값이 저장될 수 있는 메모리 공간 - 값 변경x

  -이름 o : 변수선언과 비슷함
   const 상수명 = 값;
   상수명은 전부다 대문자
   단어의미가 구분할때 바로 구분짓는다

   -이름 x : 리터럴 상수

    ex)심볼릭 상수 : 
       리터럴 상수 : 10000
*/

const MAX_PRICE = 10000

let name = 'kim'
let age = 1
let cute = true

//key값과 value의 변수값이 같으면 생략가능
let person = {name, age, cute}
console.log(person)

let person2 = {
  name2 : 'lee',
  age2 : 2,
  cute2 : true
}
let {name2, age2, cute2} = person2;
console.log(person2)

//array distructiuring

let arr = [1,2,3]
let [a,b,c] = arr
console.log(a)
console.log(b)
console.log(c)

let array = [1,2,3,4,5]
let [a1,b1,c1, ...etc] = array

console.log(a1)
console.log(b1)
console.log(c1)
console.log(...etc)

let num = [11,22,33,44,55]
let [first, ...rest] = num
console.log(num)
console.log(rest)

//객체값을 변수에 쪼개서 넣기
//주의사항 : 값을 저장하는 변수명 = 객체의 키값과 동일한 이름으로 !
let book = {
  title : 'niruto',
  author : 'japan',
  price : 1000
}
let {title, author, price} = book

console.log(title)
console.log(author)
console.log(price)


//Spread : 배열이나 객체의 값들을 개별적으로 추출하여 펼친다
let x = [1,2]
let y = [3,4]
let z = [5,6]
let result = [...x, ...y, ...z] //하나로 합쳐라
let result2 = [...x, 9,0]
console.log(result)
console.log(result2)

//Template Literal
//문장이어쓰기 문법
let word1 = '실습하기'
let word2 = '좋은건가'
let word3 = '안좋은건가'
console.log(`${word1} ${word2} ${word3}`)

//화살표함수
//화살표 함수는 항상 익명함수다. 자신의 this, arguments, super을 바인딩하지 않는다.
//자신만의  this를 생성하지 않고 자신을 포함하고 있는 context의 this를 이어받는다.

//기존 함수
// function 함수이름 (변수) {
//   console.log()
// }

let 함수명 = (매개변수) => {
  console.log(매개변수) //매개변수 없으면 안쓰면됨
}

함수명(20) //값이 바뀐다

//객체에 함수를 포함시킬 수 있다.
//자바스크립트 객체(=오브젝트)만 가능, json 파일형식에는 사용불가
let music = {
  title : 'love 119',
  singer : 'riize',
  showInfo : function() {
    console.log(this.title)
    console.log(this.singer)
  },
  showThis : function(){
    console.log("객체에서 this")
    console.log(this)
  },
  showThis2 : ()=>{
    console.log(this)
  }
}
//객체명.메서드명()  -- 객체 안에 들어 있는 함수는 메서드라고 한다.
music.showInfo()

//this 사용
//1. 전역위치 - window 
//console.log(this)
//2. 함수 안 - window
//3. 객체 안 function() - 현재 객체
music.showThis() //현재 객체의 전체내용 출력
music.showThis2() // 화살표함수는 this에 현재 객체를 연결안함. 그래서 전역변수와 같이 window 출력

//결론 : 