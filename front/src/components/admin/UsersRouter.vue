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
          v-if="privilege <= user.privilege">
        <td>{{user.userId}}</td>
        <td>{{user.name}}</td>
        <td>
          <label>
            <select v-on:change="selectEventListener" :index="index"
                    :eforeValue="user.privilege">
              <option value="1" :selected="1 === user.privilege">1</option>
              <option value="2" :selected="2 === user.privilege">2</option>
              <option value="0" :selected="0 === user.privilege">0</option>
            </select>
          </label>
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
                privilege: 2,
            };
        },
        created() {
            fetch(`${this.$store.state.baseURL}/admin/isPrivileged`, {
                method: 'GET',
                credentials: "include",
            })
                .then(result => {
                    if (result.status !== 200) throw "not privileged!";
                    return result.json();
                })
                .then(result => this.privilege = result.privilege)
                .catch(() => this.$router.push({name: 'normalHome'}));
        },
        mounted() {
            fetch(`${this.$store.state.baseURL}/admin/users`, {
                method: 'GET',
                credentials: "include",
            })
                .then(result => {
                    if (result.status !== 200 && result.status !== 304) throw "error in get all users!";
                    return result.json();
                })
                .then(result => this.userList = result)
                .catch(error => console.log(error));
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
                        return fetch(`${this.$store.state.baseURL}/admin/user/${user.userId}/${user.update_privilege}`, {
                            method: 'PATCH',
                            credentials: "include",
                        })
                    });
                    Promise.all(promises)
                        .then(value => {
                            console.log(`promise all`, value);
                        })
                        .catch(error => {
                            console.log(`promise all`, error);
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
