<template>
  <div>
    <h1>home</h1>
    <span>welcome, {{this.$store.state.userId}}!</span>
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
                .then(result => {
                    if (result.status !== 200) throw "not privileged!";
                    return result.json();
                })
                .then(result => this.$store.dispatch('login', {
                    userId: result.userId,
                    userName: result.name
                }))
                .catch(error => {
                    console.log(error);
                    this.$router.push({name: 'normalHome'});
                })
        },
        methods: {
            logout() {
                fetch(`${this.url}/user/logOut`, {
                    method: 'GET',
                    credentials: "include",
                })
                    .then(() => {
                        this.$store.dispatch('logout');
                        this.$router.push({name: 'normalHome'})
                    });
            }
        }
    }
</script>

<style scoped>

</style>
