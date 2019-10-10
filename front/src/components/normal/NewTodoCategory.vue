<template>
  <section class="category-sub-container">
    <section class="section-container category-content">
      <h3>make new category</h3>
    </section>
    <section class="note-container" @click="showNewCategoryModal">
    </section>
    <todo-modal v-if="newCategoryShow" @close="makeNewCategory">
      <h3 slot="header">make new category</h3>
      <label slot="body">
        category name :
        <input slot="body" type="text" v-model="newCategoryName"/>
      </label>
    </todo-modal>

  </section>
</template>

<script>
    import TodoModal from "./TodoModal";
    import {makeFormData} from "../../../lib/makeFormData";

    export default {
        name: "NewTodoCategory",
        props: {
            boardId: Number,
        },
        data() {
            return {
                newCategoryShow: false,
                newCategoryName: '',
            };
        },
        methods: {
            showNewCategoryModal() {
                this.newCategoryShow = true;
            },
            makeNewCategory(flag) {
                if (flag && this.newCategoryName !== '') {
                    fetch(`${this.$store.state.baseURL}/todo/category/`, {
                        method: 'POST',
                        credentials: "include",
                        body: makeFormData({
                            boardId: this.boardId,
                            name: this.newCategoryName
                        })
                    })
                        .then(result => result.json())
                        .then(result => {
                            this.$emit('addNewCategory', result);
                        })
                        .catch(error => console.log(error));
                }
                this.newCategoryShow = false;
                this.newCategoryName = '';
            }
        },
        components: {
            TodoModal
        }
    }
</script>

<style scoped>
  .section-container {
    height: 5rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-height: fit-content;
    overflow: hidden;
    flex-grow: 0;
  }

  .category-sub-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: unset;
    max-width: 25%;
    height: -webkit-fill-available;
    margin: 0.5rem;
  }

  .note-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    min-height: unset;
    border: 1px black dashed;
    border-radius: 0.5rem;
    cursor: pointer;

  }
</style>
