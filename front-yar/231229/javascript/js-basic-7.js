    /*
      let name = ['kim','song','lee']
      let age = [20 ,21, 22]
      let address = ['서울','인천','경기']
      let phone = ['010-0000-1111','010-0000-1112','010-0000-1113']

      위의 데이터들을 
      {key : value} 문법으로 하나의 덩어리를 만든다 = 객체
      # key는 중복허용x
    */

    //student.js에서 export한 내용을 studentList에 import하겠다
    //import studentList from "student.js"

    let person = {
      name : 'kim',
      age : 32,
      address : '서울',
      phone : '010-0000-1111'
    }

    console.log(person.name)
    console.log(person['name'])

    let people = [
      {
        name : 'Lee',
        age :22
      },
      {
        name : 'Kim',
        age :23
      },
      { 
        name : 'Song',
        age :25
      }
    ]

    console.log(people)
    console.log(people[0].name)
    console.log(people[1]['name'])
    console.log(people[2].name)

    let student = {
      name : 'Lee',
      id  : 101,
      hobby : ['1','2','3'],
      score : {
        korean:85,
        math:75,
        english:80
      }
    }

    console.log(student.score.korean)
    console.log(student.score.math)
    console.log(student.score.english)

    let studentList = [{
      name : 'Lee',
      id  : 101,
      hobby : ['1','2','3'],
      score : {
        korean:85,
        math:75,
        english:80}
      },
      {
      name : 'Kim',
      id  : 102,
      hobby : ['4','5','6'],
      score : {
        korean:75,
        math:45,
        english:100}
    }]
    console.log(studentList)
    
    for(let i=0; i < studentList.length; i++){
    document.write('<div class="box">')
    document.write('<p> korean : ' + studentList[i].score.korean + '</p>')
    document.write('<p> math : ' + studentList[i].score.math + '</p>')
    document.write('<p> english : ' + studentList[i].score.english + '</p>')
    document.write('</div>')
    
    document.getElementsByClassName('box')[i].style.border ="2px solid red"
    }
    
    
    export default studentList;