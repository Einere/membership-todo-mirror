# Requirements Specification 
**mission 3 - login**  
**mission 4 - todo**  
author : Einere  
date : 19.08.28 ~ 19.09.02  
description : 회원가입 및 로그인 개발

### 기능 요구사항
#### mission 3 - login
[기획서 ppt](https://docs.google.com/presentation/d/10rNnUqZlv5SYdnSWNIZ0fjGVsA2BJj7TN5BabRkV1c8/edit?usp=sharing)
- 미니 캐러셀 UI
- 메인 카드형 캐러셀 UI

[참고 - 아마존](http://prime.amazon.com)

#### mission 4 - todo
[기획서 ppt](https://docs.google.com/presentation/d/13OX2mGk-wvwPyI06afMPITMPz9jGYLe4y2FIFBImeyA/edit#slide=id.p)
- admin 기능
- 일반 사용자 기능

### 기술 요구사항
#### 공통
- PC 기준 웹 화면을 개발한다. Mobile Web을 고려하지 않는다.
- 크롬브라우저를 기준으로 개발한다.
- 라이브러리를 사용할 수 없다. (jQuery, React, Vue, lodash, bootstrap, materialUI등등)

#### HTML
- HTML5 Layout 태그를 사용한다(header, footer 등)
- 의미에 맞는 적절한 태그를 선택해서 사용한다.
- W3C Validator 를 통과하도록 한다.

#### CSS
- PC웹 화면을 기준으로 모든 엘리먼트의 크기는 임의로 결정한다.
- 의미적으로 같은 엘리먼트들은 같은 넓이와 크기를 갖도록 한다.
- padding 과 margin을 일관된 크기로 사용한다.
- CSS 클래스 이름 규칙을 스스로 정하고, 이를 지키며 개발한다.
- flexbox 속성을 적극 이용한다.
- px대신 rem단위를 사용한다.
- css는 Sass를 사용해서 개발하고 여러개의 모듈로 나눠서 개발한다.

#### JS
- 전역변수와 중복코드를 최소화 한다.
- 함수는 동사+명사로 구성한다. 변수는 명사를 사용한다.
- 객체지향적인 프로그래밍을 지향한다. prototype 패턴과 ES Classes 패턴을 각각 한 번 이상 사용한다.
- ES 2015 문법을 적극 사용한다.
    - const, let, arrow function, destructuring, spread operator, object literal..
- 표준 DOM API를 사용한다.
- Event delegation 방식으로 이벤트처리한다.
- 애니메이션은 CSS Transition을 주로 사용하고, requestAnimationFrame을 부분적으로 시도해본다.
- fetch API를 사용해서 초기에 필요한 데이터를 가져오도록 한다. 서버환경이 갖춰지기 전까지는 dummy data를 활용해도 좋다.
- fetch API사용시 then메서드를 활용한 방식으로 구현한다.
- fetch API를 활용한 데이터 통신 구현시, 4XX, 5XX status 응답에 대한 에러처리를 포함해서 구현한다.
- 데이터 로딩성능을 고려하는 차원에서, 모든 데이터를 한번에 가져올지 부분적으로 나눠서 데이터를 가져올지를 본인이 결정해서 구현한다.

#### Web framework
- express를 사용
- passport-local 사용
- 미들웨어로 admin 여부를 확인하는 함수를 구현한다.
- 미들웨어로 해당 URL에 대한 사용자 권한을 확인하는 함수를 구현한다.

#### Database
- 데이터 설계를 먼저 한다. (workbench로 작성한 스샷 README에 추가)
- MySQL2를 사용한다.
- 스크립트 등을 이용해서 초기 데이터를 업로드한다.
- 개발 모드에서 프로젝트 재시작시 초기 상태로 데이터를 복구한다.

#### Deploy
- nCloud에 배포한다.
- 저장소의 README.md 등에 완성된 배포 URL을 기술한다.
- 로컬 배포가 가능하도록 문서 / 스크립트 등을 작성한다.
- (옵션) 자동 배포를 구현한다. 자동 배포에 대한 자료를 GitHub 저장소에 추가한다.

#### VCS
- 커밋 메시지를 2 줄 이상 작성한다.
- 커밋 메시지의 본문은 반드시 한글로 작성하고 가능하면 '왜?'를 포함한다.
- Pull Request 보낼 때 커밋 내용을 요약해서 메시지로 기록을 남긴다.