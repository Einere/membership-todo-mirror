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
        <td><img class="card-image" :src="item.src" alt=""></td>
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
            };
        },
        async created() {
            const result = await fetch('http://localhost:3000/items', {
                method: 'GET',
            });
            this.itemList = await result.json();
        },
        mounted() {
            this.modal = document.querySelector(`.popup-modal`);
            this.blackout = document.querySelector('.body-blackout');

            fetch(`http://localhost:3000/users/check`, {
                method: 'GET',
                credentials: "include",
            })
                .then(res => res.json())
                .then(res => {
                    if (res.privilege > 1) this.$router.push({name: 'normalHome'});
                })
                .catch(() => {
                    this.$router.push({name: 'normalHome'});
                });
        },
        methods: {
            deleteItem(id) {
                fetch(`http://localhost:3000/items/${id}`, {
                    method: 'DELETE',
                    credentials: "include",
                })
                    .then(res => res.json())
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
