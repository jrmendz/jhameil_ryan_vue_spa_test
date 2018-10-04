<template>
  <v-data-table
    :headers="headers"
    :items="users"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.email }}</td>
      <td>{{ props.item.phone }}</td>
      <td>{{ props.item.website }}</td>
      <td>
        <div>
          <v-btn depressed small color="primary" @click="userDetails(props.item.id)">Details</v-btn>
        </div>
      </td>
    </template>
  </v-data-table>
</template>
<script>
export default {
  name: 'UsersComponent',
  data () {
    return {
      headers: [
        { text: 'ID', value: 'id', align: 'center' },
        { text: 'Name', value: 'name', align: 'center' },
        { text: 'Email', value: 'email', align: 'center' },
        { text: 'Phone', value: 'phone', align: 'center' },
        { text: 'Website', value: 'website', align: 'center' },
        { text: 'Actions', value: 'actions', sortable: false, align: 'center' }
      ],
      users: []
    }
  },
  methods: {
    async getUsers () {
      let _s = this
      let userList = await _s.$store.dispatch('GET_USERS')
      _s.users = userList.data
    },
    userDetails (id) {
      let _s = this
      _s.$router.push({ name: 'userDetails', params: { id: id } })
    }
  },
  mounted () {
    let _s = this
    _s.getUsers()
  }
}
</script>
