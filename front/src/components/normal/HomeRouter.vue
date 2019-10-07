<template>
  <section class="home">
    <h2>welcome!</h2>
    <span id="user-name">{{this.$store.state.userName}}</span>
    <button id="logout" v-on:click="logout">로그아웃</button>
  </section>
</template>

<script>
    export default {
        name: "Home",
        props: {
            loggedInUserName: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                url: `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}`,
            };
        },
        mounted() {
            if (this.$store.state.userId === undefined) {
                this.$router.push({name: 'normalLogIn'});
            }
        },
        methods: {
            logout() {
                fetch(`${this.url}/user/logOut`, {
                    method: 'GET',
                    credentials: "include",
                })
                    .then(res => res.text())
                    .then(() => {
                        this.$store.dispatch('logout');
                        this.$router.push({name: 'normalLogIn'});
                    });
            }
        }
    }
</script>

<style scoped>
  section.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
  }

  section.home span#user-name {
    text-align: center;
  }
</style>
