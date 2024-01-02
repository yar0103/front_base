# css

# css 적용하는 법

1) 인라인 스타일 - 태그에 직접 style 속성을 통해 지정
#자바스크립트로 css 변경할때 - 인라인 스타일로 변경
 (최대한 css에서 직접 처리하도록 하자)
#최우선순위
<p style="font-size:20px; color : red; text-align: center">내용</p>

2) 내부 스타일시트
<head></head> 영역에 <style></style> 태그 사이에 스타일 기록
<style>
  태그이름 {속성:값; 속성:값;}
  .클래스명 {속성:값; 속성:값;}
  #아이디명 {속성:값; 속성:값;}
</style>

3) 외부 스타일시트 (많이씀)
파일명.css
<head></head>영역 안에
<link rel="stylesheet" href="파일경로.css">
-->link 태그의 href에 경로 작성

# 선택자 우선순위
!important > 인라인스타일 > 부모자식관계 > #id > .class > 태그 > 부모값에의한 상속

동등레벨일때는 젤 마지막 기재한게 적용됨

# 선택자 혼합
.content.board = 띄어쓰기 없음
-클래스혼합 ( content와 board 클래스 둘다 있는 요소를 선택해라)

.content.board = 띄어쓰기 없음
- 클래스혼합 content와 board클래스가 둘다있는 요소를 선택해라
.content .board = 띄어쓰기 있음
- <자식요소> 중에서 이름이 board인 요소를 선택해라