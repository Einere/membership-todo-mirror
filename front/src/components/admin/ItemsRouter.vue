<template>
  <div>
    <h1>Items</h1>
    <button @click="openModal({}, true)">추가</button>
    <table>
      <tr>
        <th>src</th>
        <th>category</th>
        <th>title</th>
        <th>content</th>
        <th>href</th>
        <th>link</th>
        <th>edit</th>
        <th>delete</th>
      </tr>
      <tr v-for="item in itemList" :key="item.id">
        <td><img class="card-image" :src="`${url}/${item.src}`" alt=""></td>
        <td>{{item.category}}</td>
        <td>{{item.title}}</td>
        <td>{{item.content}}</td>
        <td>{{item.href}}</td>
        <td>{{item.link}}</td>
        <td>
          <button v-on:click="openModal(item, false)">수정</button>
        </td>
        <td>
          <button v-on:click="deleteItem(item.id)">삭제</button>
        </td>
      </tr>
    </table>
    <modal ref="modal"></modal>
  </div>
</template>

<script>
    import Modal from "../normal/Modal";

    export default {
        name: "ItemsRouter",
        data() {
            return {
                itemList: [],
                item: undefined,
                modal: undefined,
                blackout: undefined,
                url: `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}`,
            };
        },
        created() {
            this.modal = document.querySelector(`.popup-modal`);
            this.blackout = document.querySelector('.body-blackout');

            fetch(`${this.url}/admin/isPrivileged`, {
                method: 'GET',
                credentials: "include",
            })
                .then(result => result.json())
                .then(result => {
                    if (result.privilege > 1) this.$router.push({name: 'normalHome'});
                })
                .catch(() => {
                    this.$router.push({name: 'normalHome'});
                });
        },
        async mounted() {
            const result = await fetch(`${this.url}/item`, {
                method: 'GET',
                credentials: "include",
            });
            try {
                this.itemList = await result.json();
            } catch (error) {
                console.log(error);
            }

        },
        methods: {
            deleteItem(id) {
                fetch(`${this.url}/item/${id}`, {
                    method: 'DELETE',
                    credentials: "include",
                })
                    .then(result => result.json())
                    .then(() => {
                        this.$router.go();
                    })
                    .catch(() => {
                    });
            },
            openModal(item, flag) {
                this.$refs.modal.openModal(item, flag);
            },
            closeModal() {
                this.$refs.modal.closeModal();
            }
        },
        components: {
            Modal
        }
    }
</script>

<style scoped>
  li {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin: 1rem 0;
  }

  td img {
    width: 10rem;
    height: 10rem;
  }

  span {
    width: unset;
  }

  tr:hover {
    background-color: rgba(141, 196, 141, 1);
  }
</style>
