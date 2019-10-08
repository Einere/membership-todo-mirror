<template>
  <article draggable="true">
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
