<template>
  <v-container fluid grid-list-md>
    <v-layout row>
      <v-flex d-flex xs12 sm6 md4>
        <h1 class="text-sm-left">User Details | <small>{{ this.userDetails.name }}</small></h1>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex d-flex xs12 sm6 md6>
        <v-card color="white">
          <v-card-title primary class="title">Company Details</v-card-title>
          <v-card-text>
            <p class="text-sm-left"><strong>Name:</strong> {{ this.userDetails.company.name }}</p>
            <p class="text-sm-left"><strong>Catch Phrase:</strong> {{ this.userDetails.company.catchPhrase }}</p>
            <p class="text-sm-left"><strong>BS:</strong> {{ this.userDetails.company.bs }}</p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md6>
        <v-card color="white">
          <v-card-title primary class="title">Address Details</v-card-title>
          <v-card-text>
            <p class="text-sm-left"><strong>Street:</strong> {{ this.userDetails.address.street }}</p>
            <p class="text-sm-left"><strong>Suite:</strong> {{ this.userDetails.address.suite }}</p>
            <p class="text-sm-left"><strong>City:</strong> {{ this.userDetails.address.city }}</p>
            <p class="text-sm-left"><strong>Zipcode:</strong> {{ this.userDetails.address.zipcode }}</p>
            <p class="text-sm-left" v-if="this.userDetails.address.geo"><strong>Lat:</strong>  {{ this.userDetails.address.geo.lat }} | <strong>Long :</strong> {{ this.userDetails.address.geo.lng }}</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-btn depressed large color="error" @click="goBack()">Go Back to User list</v-btn>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'UserDetailsComponent',
  data () {
    return {
      userDetails: {
        name: '',
        company: {},
        address: {}
      }
    }
  },
  methods: {
    async getUserDetails (id) {
      let _s = this
      let userDetails = await _s.$store.dispatch('GET_USER_DETAILS', { id: id })
      if (userDetails) {
        _s.userDetails.name = userDetails.data[0].name
        _s.userDetails.company = userDetails.data[0].company
        _s.userDetails.address = userDetails.data[0].address
      }
    },
    goBack () {
      let _s = this
      return _s.$router.push({ name: 'userList' })
    }
  },
  created () {
    let _s = this
    _s.getUserDetails(_s.$route.params.id)
  }
}
</script>
