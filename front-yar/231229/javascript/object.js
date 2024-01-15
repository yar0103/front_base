let name = ["홍","김","구"]
let age = [30,24,37]

let person = {
  name : "홍",
  age : 30
}

let people = [
  {name : "홍",  age : 30},
  {name : "김",  age : 24},
  {name : "구",  age : 37}
]
//키와 값을 한쌍으로 내용을 저장함 (제이슨방식)

console.log(people)

for(let i =0; i < people.length; i++){
  console.log(people[i])
}

let student = [
  {id : 101 ,
    name : 'arin',
    hobby : [
      '노래',
      '유튜브시청',
      '이쁜카페가기',
      '넷플몰아보기'
    ],
    score : { 
      수학 : 100, 
      영어 : 100, 
      국어 : 100 }
    },
    {
      id : 102 ,
  name : 'nanhee',
  hobby : [
    '독서',
    '뜨개질',
    '요리'
  ],
  score : { 
    수학 : 99, 
    영어 : 99, 
    국어 : 99 }
    }
]
