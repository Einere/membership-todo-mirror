## plan
### 19.09.30
1. 프로젝트 디렉토리 설정 (express, vue)
2. database 폴더 및 파일들 생성
    1. `index.js`: 엔트리 포인트
    2. `db.js`: mysql2 설정 및 커넥션 생성
    3. `userDB.js`: User 테이블 관련 함수들
    4. `itemDB.js`: Item 테이블 관련 함수들
3. models 폴더 및 파일들 생성
    1. `index.js`: 엔트리 포인트
    2. `userModel.js`: 유저 레코드용 모델
    3. `itemModel.js`: 아이템 레코드용 모델
4. queries 폴더 및 파일들 생성
    1. `userQueries.js`: 유저 테이블용 쿼리 객체
    2. `itemQueries.js`: 아이템 테이블용 쿼리 객체
5. utils 폴더 및 파일들 생성
    1. `hashPassword.js`: crypto를 이용한 해시 함수
6. `.env` 파일 생성 : 각종 환경변수 설정 파일
7. `whitelist.js` 파일 생성 : cors 화이트리스트 호스트 파일

### 19.10.01
0. session, cors 디렉토리 생성후 관련 파일을 넣음
1. 각종 라우터 파일명 수정 (더 명확한 의미를 가지도록)
1. `database/userDB.js`의 유저 추가 함수에서, `hashPassword.js`를 사용하도록 수정
2. `database/userDB.js`의 유저 업데이트 함수, 유저 삭제 함수 구현하기
3. `database/itemDB.js`의 함수들 구현하기
4. 프로젝트와 마일스톤 설정하기

### 19.10.02
0. 프론트의 로그인, 로그아웃, 로그인 확인 기능 구현하기
1. 관리자 미들웨어 구현하기
2. 관리자 화면 및 기능이 잘 작동하는지 확인하기 (유저, 아이템 API)
3. 투두 관련 테이블 구현하기

### 19.10.03
1. ERD 그리기
2. 초기화 스크립트 작성 (DDL 추출)
3. 투두용 모델들, 쿼리 작성
4. 관리자 페이지의 유저 관리 페이지에서 패스포트를 통한 인증이 제대로 되지 않는 오류 수정

### 19.10.04 
1. readme 작성하기
2. 배포하기 (update후 git, node, pm2 설치)

### 19.10.05
1. 배포하기 (서버)

### 19.10.06
1. 배포하기 (프론트) (ACG에서 8080포트 연 뒤, ssh에서 npm run serve실행) 
2. 투두 API 구현하기 (board, category)
3. vuex를 도입하여 유저 아이디, 유저 네임 등등 관리하기

### 19.10.07
1. 투두 API 구현하기 (note)
2. 투두 화면 구현하기
3. 초기화 SQL 작성하기 (`initializeDB.sql`, 테스트는 안해봄)

### 19.10.08
1. `Note.vue` 구현하기
2. 드래그 앤 드랍 구현하기

### 19.10.09
1. 변경된 카드에 따라, DB에 적용되도록 fetch 날리기
2. 보드 이름 변경 구현하기
3. 카테고리가 고정폭을 가지도록 수정하기
4. 카테고리 이름 변경 구현하기

### 19.10.10
1. 노트 생성 구현하기
2. 노트 이동 로직 수정하기 (`category`, `position` 관련 에러)
3. 노트 변경 구현하기
4. 노트 삭제 구현하기
5. 카테고리 생성 구현하기
6. 카테고리 삭제 구현하기

### 19.10.11
1. 보드 생성 구현하기
2. 보드 삭제 구현하기
2. 드래그시 미리보기 기능 구현하기
3. 초기화 스크립트 작성하기
5. category-container 오버플로우시 수평스크롤 기능 추가하기

### 언젠가 할 것
1. `Modal.vue` 컴포넌트 모듈화하기(원하는 내용 끼워넣을 수 있도록..)
2. `Modal.vue` 컴포넌트 책임 분리하기 (모달 자체는 모달 기능만 포함해야 되지 않을까..)
3. select에서는 애스터리스크 대신 컬럼명을 명시하자.
4. query보다는 execute를 사용하자.
5. 노트 이동 로직에서, 복잡한 이벤트 흐름 구조가 탄생했는데, 최적화할 수 없을까?
6. 노트 이동 로직에서, 한번 이동한 노트는 다시 이동 불가능한 현상 수정. (drag start는 정상 작동)
7. formData 만드는 로직을 `makeFormData`함수로 리팩토링하기. 