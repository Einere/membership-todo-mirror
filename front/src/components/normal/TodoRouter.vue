<template>
  <todo-board :initBoard="board" :initCategories="categories"></todo-board>
</template>

<script>
    import TodoBoard from "./TodoBoard";

    export default {
        name: "TodoRouter",
        data() {
            return {
                board: {},
                categories: [],
            };
        },
        async created() {
            if (!this.$store.state.userId) this.$router.push({name: 'normalLogIn'});

            try {
                const boardPromise = await fetch(`${this.$store.state.baseURL}/todo/board/${this.$store.state.userId}`, {
                    method: 'GET',
                    credentials: "include",
                });
                this.board = await boardPromise.json();

                const categoryPromise = await fetch(`${this.$store.state.baseURL}/todo/category/${this.board.id}`, {
                    method: 'GET',
                    credentials: "include",
                });
                this.categories = await categoryPromise.json();
            } catch (e) {
                console.log(e);
            }

        },
        components: {
            TodoBoard
        },
    }
</script>

<style scoped>

</style>
