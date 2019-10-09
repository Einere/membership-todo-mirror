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
            deleteNote(moveData) {
                // this.$refs.cate.forEach(cate => cate.deleteNote(moveData));
                this.$refs.cate.filter(cate => cate.$vnode.key === moveData.from)[0].deleteNote(moveData);
            },
            addNote(note, moveData) {
                console.log('addNote', moveData, this.category);
                this.$refs.cate.filter(cate => cate.category.id === moveData.to)[0].addNote(note, moveData.newPosition);

                const formData = Object.entries(moveData).reduce((acc, val) => {
                    acc.append(val[0], val[1].toString());
                    return acc;
                }, new FormData());

                // db에 반영
                fetch(`${this.$store.state.baseURL}/todo/note/move`, {
                    method: 'PATCH',
                    credentials: "include",
                    body: formData
                })
                    .then(result => result.json())
                    .then(result => console.log(result))
                    .catch(error => console.log(error));
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
