<template>
  <section class="login">
    <h1>로그인</h1>
    <label for="login-id"></label><input id="login-id" type="text" placeholder="아이디" ref="loginId"/>
    <label for="login-pw"></label><input id="login-pw" type="password" placeholder="비밀번호"
                                         ref="loginPw"/>
    <span id="login-result"></span>
    <div class="login-button-bar">
      <button id="signUp">회원가입</button>
      <button id="login" v-on:click="login">로그인</button>
      <button v-on:click="check">확인</button>
    </div>
  </section>
</template>

<script>
    export default {
        name: "LogInRouter",
        data() {
            return {
            };
        },
        methods: {
            login() {
                const formData = new FormData();
                formData.append('user_id', this.$refs.loginId.value);
                formData.append('password', this.$refs.loginPw.value);

                fetch(`${this.$store.state.baseURL}/user/logIn`, {
                    method: 'POST',
                    credentials: "include",
                    body: formData
                })
                    .then(result => result.json())
                    .then(result => {
                        this.$store.dispatch('login', {
                            userId: result.userId,
                            userName: result.name
                        });
                        this.$router.push({name: 'normalHome'});
                    });
            },
            check() {
                fetch(`${this.$store.state.baseURL}/user/isLoggedIn`, {
                    method: 'GET',
                    credentials: "include",
                })
                    .then(result => result.text())
                    .then(result => console.log('[LoginRouter.vue] check() :', result));
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
  section.login {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    height: fit-content;
    margin: 0 auto;
  }

  @media (min-width: 425px) {
    section.login {
      width: 100%;
    }
  }

  @media (min-width: 1200px) {
    section.login {
      width: 50%;
    }
  }


  section.login span {
    text-align: center;
    margin-bottom: 1rem;
  }

  section.login input {
    height: var(--middle-font-size);
    width: 50%;
    margin-bottom: 1rem;
  }

  section.login .login-button-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    width: 50%;
  }

  section.login .login-button-bar button {
    height: var(--large-font-size);
    width: 48%;
  }

  section.login .login-button-bar button:hover {
    background-color: rgba(27, 111, 27, 1);
    cursor: pointer;
  }
</style>
