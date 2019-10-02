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
                url: `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}`,
                loggedInUserName: '',
            };
        },
        mounted() {
            fetch(`${this.url}/admin/isPrivileged`, {
                method: 'GET',
                credentials: "include",
            })
                .then(res => {
                    if (res.status !== 200) throw "not privileged!";
                    return res.json();
                })
                .then(res => this.loggedInUserName = res.name)
                .catch(err => {
                    console.log(err);
                    this.$router.push({name: 'normalHome'});
                })
        },
        methods: {
            logout() {
                fetch(`${this.url}/user/logOut`, {
                    method: 'GET',
                    credentials: "include",
                })
                    .then(() => this.$router.push({name: 'normalHome'}));
            }
        }
    }
</script>

<style scoped>

</style>
