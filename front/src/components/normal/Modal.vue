<template>
  <div>
    <div class="body-blackout" ref="blackout"></div>
    <section class="popup-modal shadow" data-popup-modal="one" ref="modal">
      <div class="popup-modal__close" v-on:click="closeModal">
        <i class="fas fa-times"></i>
      </div>
      <img src="" alt="image" ref="image" @click="openFileDialog">
      <input type="file" accept="image/*" ref="upload" @change="displayUploadImage"
             style="display: none;">
      <label>
        src :
        <input type="text" alt="src" ref="src">
      </label>
      <label>
        category :
        <input type="text" alt="category" ref="category">
      </label>
      <label>
        title :
        <input type="text" alt="title" ref="title">
      </label>
      <label>
        content :
        <input type="text" alt="content" ref="content">
      </label>
      <label>
        href :
        <input type="text" alt="href" ref="href">
      </label>
      <label>
        link :
        <input type="text" alt="link" ref="link">
      </label>
      <div class="button-bar">
        <button @click="addItem" v-if="flag">추가</button>
        <button @click="modifyItem" v-else>수정</button>
        <button @click="closeModal">취소</button>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
        name: "Modal",
        props: {
            item: Object,
        },
        data() {
            return {
                flag: false
            };
        },
        mounted() {

        },
        methods: {
            openModal(item, flag) {
                this.$refs.image.src = item.src;
                this.$refs.src.value = item.src;
                this.$refs.category.value = item.category;
                this.$refs.title.value = item.title;
                this.$refs.content.value = item.content;
                this.$refs.href.value = item.href;
                this.$refs.link.value = item.link;
                this.flag = flag;

                this.$refs.modal.classList.add('is--visible');
                this.$refs.blackout.classList.add('is-blacked-out');
            },
            closeModal() {
                this.$refs.modal.classList.remove('is--visible');
                this.$refs.blackout.classList.remove('is-blacked-out');
            },
            modifyItem(id) {
                for (const entry of this.makeFormData().entries()) {
                    console.log(entry);
                }
                fetch(`http://localhost:3000/items/${id}`, {
                    method: 'PATCH',
                    credentials: "include",
                })
                    .then(res => res.json())
                    .then(() => {
                        this.$router.go();
                    })
                    .catch(() => {
                    });
            },
            makeFormData() {
                const formData = new FormData();
                let src = this.$refs.src.value.split("/");
                src = src[src.length - 1];
                formData.append('image', this.$refs.upload.files ? this.$refs.upload.files[0] : undefined);
                formData.append('src', src);
                formData.append('category', this.$refs.category.value);
                formData.append('title', this.$refs.title.value);
                formData.append('content', this.$refs.content.value);
                formData.append('href', this.$refs.href.value);
                formData.append('link', this.$refs.link.value);
                return formData;
            },
            addItem() {
                fetch(`http://localhost:3000/items/add`, {
                    method: 'POST',
                    credentials: "include",
                    body: this.makeFormData()
                })
                    .then(res => res.json())
                    .then(() => {
                        this.$router.go();
                    })
                    .catch(() => {
                    });
            },
            openFileDialog() {
                this.$refs.upload.click();
            },
            displayUploadImage() {
                const input = this.$refs.upload;
                if (input.files && input.files[0]) {
                    const reader = new FileReader();

                    reader.onload = function (e) {
                        this.$refs.image.src = e.target.result;
                    }.bind(this);

                    reader.readAsDataURL(input.files[0]);
                }
            }
        }
    }
</script>

<style scoped>
  img {
    width: 10rem;
    height: 10rem;
    cursor: pointer;
  }

  .button-bar {
    display: flex;
  }

  /* modal */
  .body-blackout {
    position: fixed;
    z-index: 1010;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .65);
    display: none;
  }

  .body-blackout.is-blacked-out {
    display: block;
  }

  .popup-trigger {
    display: inline-block;
  }

  .popup-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 40%;
    width: 50%;
    background-color: whitesmoke;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 45px;
    opacity: 0;
    pointer-events: none;
    transition: all 300ms ease-in-out;
    z-index: 1011;
  }

  .popup-modal .popup-modal-title {
    margin: 1rem auto;
  }

  .popup-modal.is--visible {
    opacity: 1;
    pointer-events: auto;
    content: " (" attr(open) ")";
  }

  .popup-modal__close {
    display: block;
    text-align: center;
    position: absolute;
    background-color: black;
    color: white;
    font-size: var(--micro-font-size);
    width: var(--large-font-size);
    line-height: var(--large-font-size);
    height: var(--large-font-size);
    right: -10px;
    top: -10px;
    cursor: pointer;
  }

  .popup-modal__close i {
    vertical-align: sub;
    font-size: var(--middle-font-size);
  }

  .popup-modal .popup-modal-agree {
    height: 50%;
    width: 100%;
    resize: none;
  }

  .popup-modal-button {
    height: var(--large-font-size);
    width: 48%;
    cursor: pointer;
  }

  .popup-modal-button:disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }
</style>
