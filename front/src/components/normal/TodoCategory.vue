<template>
  <section class="category-sub-container">
    <h3>todo category</h3>
    <section class="note-container">

    </section>
  </section>

</template>

<script>
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
        mounted() {
            fetch(`${this.$store.state.baseURL}/todo/note/${this.category.id}`, {
                method: 'GET',
                credentials: "include",
            })
                .then(result => result.json())
                .then(result => this.notes = result)
                .catch(error => console.log(error));
        }
    }
</script>

<style scoped>
  .category-sub-container {
    display: flex;
    flex-direction: column;
    width: unset;
  }

  .note-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
</style>
