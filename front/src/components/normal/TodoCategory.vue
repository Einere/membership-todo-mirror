<template>
  <section class="category-sub-container">
    <section class="section-container category-content">
      <h3 v-if="!categoryTitleEdit">{{category.name}}</h3>
      <input type="text" v-model="category.name" v-else>
      <font-awesome-icon icon="plus" @click="showNewNoteSection"/>
      <font-awesome-icon icon="edit" @click="editCategoryTitle" v-if="!categoryTitleEdit"/>
      <font-awesome-icon icon="save" @click="saveCategoryTitle" v-else/>
      <font-awesome-icon icon="trash-alt" @click="deleteCategory"/>
    </section>
    <section class="section-container new-note-section" v-if="newNoteSectionShow">
      <textarea v-model="newNoteContent"></textarea>
      <button @click="addNewNote">add</button>
      <button @click="cancelNewNote">cancel</button>
    </section>
    <!-- offset 계산을 정상적으로 하기 위해, self 조건을 추가 -->
    <section class="note-container" @dragover.prevent.self="dragoverHandler"
             @drop.prevent.self="dropHandler">
      <note v-for="note in sortedNotes" :key="note.id" :note="note" @removeNote="removeNote"></note>
    </section>
  </section>

</template>

<script>
    import Note from './Note.vue';

    export default {
        name: "TodoCategory",
        props: {
            initCategory: Object,
        },
        data() {
            return {
                notes: [],
                categoryTitleEdit: false,
                newNoteSectionShow: false,
                newNoteContent: '',
            };
        },
        computed: {
            category() {
                return this.initCategory;
            },
            sortedNotes() {
                return this.notes.sort((a, b) => a.position - b.position);
            }
        },
        methods: {
            // 카테고리 관련 메소드
            editCategoryTitle() {
                this.categoryTitleEdit = true;
            },
            saveCategoryTitle() {
                this.categoryTitleEdit = false;

                fetch(`${this.$store.state.baseURL}/todo/category/name/${this.category.id}/${this.category.name}`, {
                    method: 'PATCH',
                    credentials: "include",
                })
                    .then(result => result.json())
                    .then(result => console.log(result))
                    .catch(error => console.log(error));
            },
            deleteCategory() {
                fetch(`${this.$store.state.baseURL}/todo/category/${this.category.id}`, {
                    method: 'DELETE',
                    credentials: "include",
                })
                    .then(result => result.json())
                    .then(() => {
                        this.$emit('deleteCategory', this.category.id);
                    })
                    .catch(error => console.log(error));
            },
            // 노트 생성 관련 메소드
            addNewNote() {
                const newNote = {
                    categoryId: this.category.id,
                    content: this.newNoteContent,
                    userId: this.$store.state.userId,
                    position: this.getProperPosition(this.notes.length)
                };

                const formData = Object.entries(newNote).reduce((acc, val) => {
                    acc.append(val[0], val[1]);
                    return acc;
                }, new FormData());

                fetch(`${this.$store.state.baseURL}/todo/note/`, {
                    method: 'POST',
                    credentials: "include",
                    body: formData,
                })
                    .then(result => result.json())
                    .then(result => {
                        result.name = this.$store.state.userName;
                        this.notes.push(result);
                    })
                    .catch(error => console.log(error))
                    .finally(this.cancelNewNote);
            },
            cancelNewNote() {
                this.newNoteContent = '';
                this.newNoteSectionShow = false;
            },
            showNewNoteSection() {
                this.newNoteSectionShow = true;
            },
            // 노트 변경 관련 메소드
            // 노트 이동 관련 메소드
            dragoverHandler(ev) {
            },

            dropHandler(ev) {
                // 대상의 id를 가져와 대상 DOM에 움직인 요소를 추가합니다.
                const moveData = JSON.parse(ev.dataTransfer.getData("text/plain"));
                moveData.to = this.category.id;
                moveData.newPosition = this.getProperPosition(this.getProperIndex(ev.offsetY));

                // category component에서 해당 note를 제거한 후, 새 category에 넣는다.
                this.$emit('deleteNote', moveData);
            },
            deleteNote(moveData) {
                const index = this.notes.findIndex(note => note.id === moveData.noteId);
                if (index > -1) {
                    const [note] = this.notes.splice(index, 1);
                    this.$emit('moveNote', note, moveData);
                }
            },
            moveNote(note, moveData) {
                note.position = moveData.newPosition;
                note.category = moveData.to;
                this.notes.push(note);
            },
            getProperIndex(offset) {
                return Math.floor(offset / 62);
            },
            getProperPosition(index) {
                let newPosition = Infinity;

                if (index === 0) {
                    newPosition = this.average(0, this.notes[0].position);
                } else if (1 <= index && index < this.notes.length) {
                    newPosition = this.average(this.notes[index - 1].position, this.notes[index].position);
                } else {
                    newPosition = this.notes[this.notes.length - 1].position + this.$store.state.step;
                }
                return newPosition;
            },
            average(...numbers) {
                return numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
            },
            // 노트 삭제 관련 메소드
            removeNote(noteId) {
                const index = this.notes.findIndex(note => note.id === noteId);
                if (index > -1) {
                    this.notes.splice(index, 1);

                    fetch(`${this.$store.state.baseURL}/todo/note/${noteId}`, {
                        method: 'DELETE',
                        credentials: "include",
                    })
                        .then(result => result.json())
                        .then(result => console.log(result))
                        .catch(error => console.log(error));
                }
            },
        },
        mounted() {
            fetch(`${this.$store.state.baseURL}/todo/note/${this.category.id}`, {
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
  .section-container {
    height: 5rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-height: fit-content;
    overflow: hidden;
    flex: none;
  }

  .new-note-section textarea {
    width: 90%;
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
    border: 1px black solid;
    border-radius: 0.5rem;
  }
</style>
