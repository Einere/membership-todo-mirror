<template>
  <div>
    <h2>Todo Board</h2>
    <p>Board name : xxx, Owner : {{this.$store.state.userName}}</p>
    <section class="category-container">
      <todo-category v-for="category in categories" :key="category.id"
                     :category="category"></todo-category>
    </section>
  </div>
</template>

<script>
    import TodoCategory from "./TodoCategory";

    export default {
        name: "TodoBoard",
        props: {
            board: Object,
            categories: Array,
        },
        data() {
            return {
                categories: []
            };
        },
        async mounted() {

        },
        components: {
            TodoCategory,
        }
    }
</script>

<style scoped>
  .category-container {
    display: flex;
    flex-direction: row;
    width: unset;
    height: unset;
  }
</style>
