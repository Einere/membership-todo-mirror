## plan
### 19.09.30
1. 프로젝트 디렉토리 설정 (express, vue)
2. database 폴더 및 파일들 생성
    1. `index.js`: 엔트리 포인트
    2. `db.js`: mysql2 설정 및 커넥션 생성
    3. `user.js`: User 테이블 관련 함수들
    4. `item.js`: Item 테이블 관련 함수들
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
1. `database/user.js`의 유저 추가 함수에서, `hashPassword.js`를 사용하도록 수정
2. `database/user.js`의 유저 업데이트 함수, 유저 삭제 함수 구현하기
3. `database/item.js`의 함수들 구현하기
4. 프로젝트와 마일스톤 설정하기

### 언젠가 할 것
0. 프론트 마이그레이션 하기
1. `Modal.vue` 컴포넌트 모듈화하기(원하는 내용 끼워넣을 수 있도록..)
2. `Modal.vue` 컴포넌트 책임 분리하기 (모달 자체는 모달 기능만 포함해야 되지 않을까..)
3. 배포하기 (pm2)
6. select에서는 애스터리스크 대신 컬럼명을 명시하자.
7. 초기화 쿼리는 sql파일로 따로 분리한다.
10. 로그인하면 log in을 log out으로 변경하기.