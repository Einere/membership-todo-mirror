<template>
  <div>
    <h1>Users</h1>
    <table>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>privilege</th>
      </tr>
      <tr v-for="(user, index) in userList" :key="index" class="user"
          v-if="privilege <= user.user_privilege">
        <td>{{user.user_id}}</td>
        <td>{{user.user_name}}</td>
        <td>
          <select v-on:change="selectEventListener" :index="index"
                  :eforeValue="user.user_privilege">
            <option value="0" :selected="0 === user.user_privilege">0</option>
            <option value="1" :selected="1 === user.user_privilege">1</option>
            <option value="2" :selected="2 === user.user_privilege">2</option>
          </select>
        </td>
      </tr>
    </table>
    <button v-on:click="updateUserData">save</button>
  </div>
</template>

<script>
    export default {
        name: "UsersRouter",
        data() {
            return {
                userList: [],
                updateUserList: [],
                privilege: 0,
            };
        },
        async created() {
            const result = await fetch('http://localhost:3000/users', {
                method: 'GET',
            });
            this.userList = await result.json();
        },
        mounted() {
            fetch(`http://localhost:3000/users/check`, {
                method: 'GET',
                credentials: "include",
            })
                .then(res => res.json())
                .then(res => {
                    if (res.privilege > 1) this.$router.push({name: 'normalHome'});
                    else this.privilege = res.privilege;
                })
                .catch(err => {
                    this.$router.push({name: 'normalHome'});
                })
        },
        methods: {
            selectEventListener(e) {
                if (e.target.getAttribute('beforeValue') !== e.target.value) {
                    const tmp = this.userList[e.target.getAttribute('index')];
                    tmp.update_privilege = e.target.value;
                    this.updateUserList.push(tmp);
                }
            },
            updateUserData() {
                if (this.updateUserList.length === 0) alert('변경된 유저가 없습니다.');
                else {
                    const promises = this.updateUserList.map((user) => {
                        return fetch(`http://localhost:3000/users/${user.user_id}/${user.update_privilege}`, {
                            method: 'PATCH',
                        })
                    });
                    Promise.all(promises)
                        .then(value => {
                            console.log(`promise all`, value);
                        })
                        .catch(err => {
                            console.log(`promise all`, err);
                        })
                }
            }
        }
    }
</script>

<style scoped>
  .user:hover {
    background-color: rgba(141, 196, 141, 1);
  }

  button {
    cursor: pointer;
  }
</style>
