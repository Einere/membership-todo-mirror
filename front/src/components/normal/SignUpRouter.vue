<template>
  <div>
    <div class="body-blackout"></div>

    <section class="form-container">
      <h2 class="form-title">회원가입</h2>

      <form class="form">
        <input-node identifier="id" label="아이디"></input-node>
        <input-node identifier="pw" label="비밀번호" input-type="password"></input-node>
        <input-node identifier="pw-check" label="비밀번호 재확인" input-type="password"></input-node>
        <input-node identifier="name" label="이름"></input-node>
        <label for="form-year">생년월일</label>
        <div class="form-birth-container">
          <input type="number" id="form-year" maxlength="4" placeholder="년(4자)">
          <select id="form-month">
            <option value="월" selected>월</option>
            <option value="0">1</option>
            <option value="1">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
            <option value="4">5</option>
            <option value="5">6</option>
            <option value="6">7</option>
            <option value="7">8</option>
            <option value="8">9</option>
            <option value="9">10</option>
            <option value="10">11</option>
            <option value="11">12</option>
          </select>
          <input type="number" id="form-day" maxlength="2" min="1" placeholder="일">
        </div>
        <span id="form-birth-result"></span>
        <label for="form-gender">성별</label>
        <select id="form-gender">
          <option value="성별" selected>성별</option>
          <option value="0">남</option>
          <option value="1">녀</option>
        </select>
        <span id="form-gender-result"></span>
        <input-node identifier="email" label="이메일"></input-node>
        <input-node identifier="phone" label="휴대전화"
                    placeholder="-없이 입력해주세요. 예)01012345678"></input-node>
        <label for="form-interesting">관심사</label>
        <div id="tags">
          <input type="text" id="form-interesting"/>
        </div>
        <span id="form-interesting-result"></span>

        <label for="form-agree" class="form-agree-bar">
          <u class="form-agree btn btn-sm btn-primary shadow p-2 px-3 popup-trigger"
             data-popup-trigger="one">약관에
            동의합니다.</u>
          <input type="checkbox" id="form-agree" class="form-agree" disabled>
        </label>
        <span id="form-agree-result"></span>
        <div class="form-button-bar">
          <input type="reset" class="form-button" id="form-reset"/>
          <!--                <input type="submit" class="form-button" id="form-submit" value="회원가입">-->
          <button class="form-button" id="form-submit">회원가입</button>
        </div>
      </form>
    </section>

    <!-- Modals -->
    <section class="popup-modal shadow" data-popup-modal="one">
      <div class="popup-modal__close">
        <i class="fas fa-2x fa-times text-white bg-primary p-3"></i>
      </div>

      <h2 class="popup-modal-title">개인정보 수집 및 이용에 대한 안내</h2>
      <textarea class="popup-modal-agree" rows="10" readonly>
                개인정보 수집 및 이용에 대한 안내

                정보통신망법 규정에 따라 부스트캠프에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.

                1. 수집하는 개인정보의 항목
                최초 회원가입 당시 아래와 같은 최소한의 개인정보를 필수항목으로 수집하고 있습니다.
                - 필수항목 : 아이디, 비밀번호, 이름, 생년월일, 성별, 이메일, 휴대전화, 관심사

                2. 개인정보의 수집 및 이용 목적
                가. 컨텐츠 제공, 특정 맞춤 서비스 제공
                나. 회원제 서비스 제공, 개인식별, 부스트캠프 이용약관 위반 회원에 대한 이용제한 조치, 서비스의 원활한 운영에 지장을 미치는 행위 및 서비스 부정이용 행위 제재

                3. 개인정보의 보유 및 이용기간
                이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.

                가. 회사 내부 방침에 의한 정보보유 사유
                - 부정이용기록(부정가입, 징계기록 등의 비정상적 서비스 이용기록)
                보존 항목 : 가입인증 휴대폰 번호
                보존 이유 : 부정 가입 및 이용 방지
                보존 기간 : 6개월
                ※ '부정이용기록'이란 부정 가입 및 운영원칙에 위배되는 게시글 작성 등으로 인해 회사로부터 이용제한 등을 당한 기록입니다.

                나. 관련법령에 의한 정보보유 사유
                상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.
                - 계약 또는 청약철회 등에 관한 기록
                보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률
                보존 기간 : 5년
                - 소비자의 불만 또는 분쟁처리에 관한 기록
                보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률
                보존 기간 : 3년
                - 웹사이트 방문기록
                보존 이유 : 통신비밀보호법
                보존 기간 : 3개월
            </textarea>
      <button class="popup-modal-button" id="popup-modal-agree-accept" disabled>동의</button>
    </section>

    <!-- snackbar -->
    <section id="snackbar"></section>
  </div>
</template>

<script>
    import InputNode from "./InputNode";

    export default {
        name: "SingUpRouter",
        components: {
            InputNode
        }
    }
</script>

<style scoped>
  /* form-container */
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: 0 auto var(--large-font-size) auto;
  }

  @media (min-width: 425px) {
    .form-container {
      width: 100%;
    }
  }

  @media (min-width: 1200px) {
    .form-container {
      width: 50%;
    }
  }

  .form-container .form-title {
    color: forestgreen;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .form-container label {
    font-weight: bold;
    font-size: var(--micro-font-size);
  }

  .form-container input,
  .form-container button,
  .form-container select {
    height: var(--middle-font-size);
  }

  .form-container .form-birth-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .form-container .form-birth-container #form-year,
  .form-container .form-birth-container #form-month,
  .form-container .form-birth-container #form-day {
    height: var(--middle-font-size);
    width: 30%;
  }

  .form-container label.form-agree-bar {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .form-container label.form-agree-bar .form-agree {
  }

  .form-container label.form-agree-bar #form-agree.form-agree {
  }

  .form-container u.form-agree:hover {
    color: rgba(27, 111, 27, 1);
    cursor: pointer;
  }

  .form-container .form-button-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .form-container .form-button-bar .form-button {
    height: var(--large-font-size);
    width: 48%;
    color: white;
    background-color: forestgreen;
    border-style: none;
    font-weight: bold;
    font-size: var(--micro-font-size);
  }

  .form-container .form-button-bar .form-button:hover {
    background-color: rgba(27, 111, 27, 1);
    cursor: pointer;
  }

  /* modal */
  .body-blackout {
    position: fixed;
    z-index: 1010;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .65);
    display: none;
  }

  .body-blackout.is-blacked-out {
    display: block;
  }

  .popup-trigger {
    display: inline-block;
  }

  .popup-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 40%;
    width: 50%;
    background-color: whitesmoke;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 45px;
    opacity: 0;
    pointer-events: none;
    transition: all 300ms ease-in-out;
    z-index: 1011;
  }

  .popup-modal .popup-modal-title {
    margin: 1rem auto;
  }

  .popup-modal.is--visible {
    opacity: 1;
    pointer-events: auto;
    content: " (" attr(open) ")";
  }

  .popup-modal__close {
    display: block;
    text-align: center;
    position: absolute;
    background-color: black;
    color: white;
    font-size: var(--micro-font-size);
    width: var(--large-font-size);
    line-height: var(--large-font-size);
    height: var(--large-font-size);
    right: -10px;
    top: -10px;
    cursor: pointer;
  }

  .popup-modal__close i {
    vertical-align: sub;
    font-size: var(--middle-font-size);
  }

  .popup-modal .popup-modal-agree {
    height: 50%;
    width: 100%;
    resize: none;
  }

  .popup-modal-button {
    height: var(--large-font-size);
    width: 48%;
    cursor: pointer;

  }

  .popup-modal-button:disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }

  /* snackbar */
  /* The snackbar - position it at the bottom and in the middle of the screen */
  #snackbar {
    visibility: hidden; /* Hidden by default. Visible on click */
    width: 50%;
    background-color: #333; /* Black background color */
    color: #fff; /* White text color */
    text-align: center; /* Centered text */
    border-radius: 10px; /* Rounded borders */
    padding: 16px; /* Padding */
    position: fixed; /* Sit on top of the screen */
    z-index: 1; /* Add a z-index if needed */
    left: 25%; /* Center the snackbar */
    bottom: var(--snackbar-bottom); /* 30px from the bottom */
  }

  /* Show the snackbar when clicking on a button (class added with JavaScript) */
  #snackbar.show {
    visibility: visible; /* Show the snackbar */
    /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
    However, delay the fade out process for 2.5 seconds */
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
  }

  /* Animations to fade the snackbar in and out */
  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: var(--snackbar-bottom);;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: var(--snackbar-bottom);
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      bottom: var(--snackbar-bottom);
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      bottom: var(--snackbar-bottom);
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }


</style>
