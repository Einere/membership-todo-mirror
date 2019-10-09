<template>
  <div>
    <h2>Todo Board</h2>
    <section class="board-content">
      <p v-if="!boardTitleEdit">Board name : {{board.name}}</p>
      <input type="text" v-model="board.name" v-else>
      <p>Owner : {{this.$store.state.userName}}</p>
      <font-awesome-icon icon="edit" @click="editBoardTitle" v-if="!boardTitleEdit"/>
      <font-awesome-icon icon="save" @click="saveBoardTitle" v-else/>
    </section>
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
                boardTitleEdit: false,
            };
        },
        methods: {
            editBoardTitle() {
                this.boardTitleEdit = true;
            },
            saveBoardTitle() {
                this.boardTitleEdit = false;

                fetch(`${this.$store.state.baseURL}/todo/board/name/${this.board.name}`, {
                    method: 'PATCH',
                    credentials: "include",
                })
                    .then(result => result.json())
                    .then(result => console.log(result))
                    .catch(error => console.log(error));
            },
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
  .board-content {
    justify-content: center;
    align-items: center;
  }

  .category-container {
    display: flex;
    flex-direction: row;
    width: unset;
    height: unset;
  }
</style>
