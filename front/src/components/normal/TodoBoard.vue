<template>
  <div>
    <h2>Todo Board</h2>
    <p>Board name : {{board.name}}, Owner : {{this.$store.state.userName}}</p>
    <section class="category-container">
      <todo-category v-for="category in categories" :key="category.id" @deleteNote="deleteNote"
                     :category="category" ref="cate" @addNote="addNote"></todo-category>
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

            };
        },
        methods: {
            // from을 얻기 힘든 구조라, 모든 카테고리에 뿌리는 방식으로 결정
            deleteNote(noteId, to, newPosition) {
                this.$refs.cate.forEach(cate => cate.deleteNote(noteId, to, newPosition));
            },
            addNote(note, to, newPosition) {
                this.$refs.cate.filter(cate => cate.category.id === to)[0].addNote(note, newPosition);
            }
        },
        mounted() {

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
