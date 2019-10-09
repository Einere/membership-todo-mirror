<template>
  <article :id="note.id" draggable="true" @dragstart="dragStartEventHandler">
    <span class="note-title">title : {{title}}</span>
    <span class="note-author">author : {{name}}</span>

  </article>
</template>

<script>
    export default {
        name: "Note",
        props: {
            note: Object
        },
        data() {
            return {
                id: this.note.id,
                category: this.note.category,
                content: this.note.content,
                author: this.note.author,
                position: this.note.position,
                name: this.note.name
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
        },
        created() {
        },
        mounted() {
        },
        components: {}
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
</style>
