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
3. 초기화 SQL 작성하기 (`initializeDB.sql`)
4. NCloud에 mysql 설치하기
5. 초기화 스크립트 작성하기

### 언젠가 할 것
1. `Modal.vue` 컴포넌트 모듈화하기(원하는 내용 끼워넣을 수 있도록..)
2. `Modal.vue` 컴포넌트 책임 분리하기 (모달 자체는 모달 기능만 포함해야 되지 않을까..)
3. 배포하기 (pm2)
6. select에서는 애스터리스크 대신 컬럼명을 명시하자.
7. 초기화 쿼리는 sql파일로 따로 분리한다.
10. 로그인하면 log in을 log out으로 변경하기.
11. query보다는 execute를 사용하자.