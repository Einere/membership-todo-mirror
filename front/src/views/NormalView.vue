<template>
  <div>
    <navigation-bar></navigation-bar>
    <!--        <main-container></main-container>-->
    <router-view class="router-view"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
    import NavigationBar from "../components/normal/NavigationBar.vue";
    // import MainContainer from "./MainContainer.vue";
    import Footer from "../components/normal/Footer.vue";

    export default {
        name: "NormalLayout",
        components: {
            NavigationBar,
            // MainContainer,
            Footer,
        },
        data() {
            return {

            };
        },
        methods: {},
    };
</script>

<style scoped>

</style>
