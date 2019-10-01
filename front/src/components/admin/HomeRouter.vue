<template>
  <div>
    <h1>home</h1>
    <span>welcome, {{loggedInUserName}}!</span>
    <button v-on:click="logout">log out</button>
  </div>
</template>

<script>
    export default {
        name: "HomeRouter",
        data() {
            return {
                url: `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}/`,
                loggedInUserName: '',
            };
        },
        mounted() {
            fetch(`${this.url}user/check`, {
                method: 'GET',
                credentials: "include",
            })
                .then(res => res.json())
                .then(res => {
                    if (res.privilege > 1) this.$router.push({name: 'normalHome'});
                    this.loggedInUserName = res.userName;
                })
                .catch(err => {
                    this.$router.push({name: 'normalHome'});
                })
        },
        methods: {
            logout() {
                fetch(`${this.url}user/logout`, {
                    method: 'GET',
                    credentials: "include",
                })
                    .then(res => this.$router.push({name: 'normalHome'}));
            }
        }
    }
</script>

<style scoped>

</style>
