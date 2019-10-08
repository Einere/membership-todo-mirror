<template>
  <section class="category-sub-container">
    <h3>todo category</h3>
    <section class="note-container">
      <note v-for="note in notes" :key="note.id" :note="note"></note>
    </section>
  </section>

</template>

<script>
    import Note from './Note.vue';

    export default {
        name: "TodoCategory",
        props: {
            category: Object
        },
        data() {
            return {
                notes: [],
            };
        },
        async mounted() {


            const noteResult = await fetch(`${this.$store.state.baseURL}/todo/note/${this.category.id}`, {
                method: 'GET',
                credentials: "include",
            })
                .then(result => result.json())
                .then(result => this.notes = result)
                .catch(error => console.log(error));
        },
        components: {
            Note
        }
    }
</script>

<style scoped>
  .category-sub-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: unset;
    height: -webkit-fill-available;
    margin: 0.5rem;
  }

  .note-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    border: 1px black solid;
    border-radius: 0.5rem;
  }
</style>
