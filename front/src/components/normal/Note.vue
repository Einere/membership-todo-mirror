<template>
  <article :id="note.id" draggable="true" @dragstart="dragStartEventHandler">
    <span class="note-title">title : {{title}}</span>
    <span class="note-author">author : {{name}}</span>
    <section class="note-button-bar">
      <font-awesome-icon icon="edit" @click="editNoteContent" v-if="!noteContentEdit"/>
      <font-awesome-icon icon="save" @click="" v-else/>
      <font-awesome-icon icon="trash-alt" @click="removeNote"/>
    </section>
    <todo-modal v-if="noteContentEdit" @close="saveNoteContent">
      <h3 slot="header">custom header</h3>
      <textarea slot="body" @input="inputNewNoteContent">{{content}}</textarea>
    </todo-modal>
  </article>
</template>

<script>
    import TodoModal from "./TodoModal";

    export default {
        name: "Note",
        props: {
            note: Object,
        },
        data() {
            return {
                id: this.note.id,
                category: this.note.category,
                content: this.note.content,
                author: this.note.author,
                position: this.note.position,
                name: this.note.name,
                noteContentEdit: false,
                newNoteContent: '',
            };
        },
        computed: {
            title() {
                return this.content.split('\n')[0];
            }
        },
        methods: {
            dragStartEventHandler(e) {
                e.dataTransfer.setData("text/plain", JSON.stringify({
                    noteId: parseInt(e.target.id, 10),
                    from: this.category
                }));
                e.dataTransfer.setData("application/x-moz-node", e.target);
                // 직접 노드르 옮길 것이 아니므로, 불필요한 설정인듯?
                // e.dataTransfer.dropEffect = "move";
            },
            editNoteContent() {
                this.noteContentEdit = true;
            },
            saveNoteContent(flag) {
                if (flag && this.newNoteContent !== '') {
                    this.content = this.newNoteContent;

                    const formData = new FormData();
                    formData.append('noteId', this.id);
                    formData.append('content', this.newNoteContent);
                    fetch(`${this.$store.state.baseURL}/todo/note/content`, {
                        method: 'PATCH',
                        credentials: "include",
                        body: formData,
                    })
                        .then(result => result.json())
                        .then(result => console.log(result))
                        .catch(error => console.log(error));
                }
                this.newNoteContent = '';
                this.noteContentEdit = false;
            },
            inputNewNoteContent(e) {
                this.newNoteContent = e.target.value;
            },
            removeNote() {
                this.$emit('removeNote', this.id);
            }
        },
        created() {
        },
        mounted() {
        },
        components: {
            TodoModal
        }
    }
</script>

<style scoped>
  article {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: -webkit-fill-available;
    border: 1px black solid;
    border-radius: 0.5rem;
    margin: 0.5rem;
  }

  .note-button-bar {
    justify-content: center;
  }
</style>
