<template>
  <div>
    <navigation-bar></navigation-bar>
    <!--        <main-container></main-container>-->
    <router-view class="router-view" v-on:setLoggedInUserName="setLoggedInUserName"
                 v-bind:loggedInUserName="loggedInUserName"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
    import NavigationBar from "./NavigationBar.vue";
    // import MainContainer from "./MainContainer.vue";
    import Footer from "./Footer.vue";

    export default {
        name: "NormalLayout",
        components: {
            NavigationBar,
            // MainContainer,
            Footer
        },
        data() {
            return {
                loggedInUserName: ''
            };
        },
        methods: {
            setLoggedInUserName(userName) {
                console.log(`setLoggedInUserName in NormalLayout, ${userName}`);
                this.loggedInUserName = userName;
            }
        }
    }
</script>

<style scoped>

</style>
