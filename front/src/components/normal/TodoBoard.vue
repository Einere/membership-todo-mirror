<template>
  <div>
    <h2>Todo Board</h2>
    <p>Board name : xxx, Owner : xxx</p>
    <section class="category-container">
      <todo-category></todo-category>
      <todo-category></todo-category>
      <todo-category></todo-category>
    </section>
  </div>
</template>

<script>
    import TodoCategory from "./TodoCategory";

    export default {
        name: "TodoBoard",
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
