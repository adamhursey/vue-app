<template>
  <div>
    <div class="name">name: {{userInformation.name}}</div>
    <div class="userName">username: {{userInformation.username}}</div>
    <div class="phone">phone: {{userInformation.phone}}</div>
    <div class="email">email: {{userInformation.email}}</div>
    <div class="ad">address: {{this.addressString}}</div>
    <div class="albums">albums: {{userAlbums}}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Users",

  data() {
    return {
      userInformation: {},
      userAlbums: {},
      addressString: ""
    };
  },

  // Fetches all Users from API for user list
  created() {
    const id = this.$route.params.id;

    console.log("created");
    try {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
          this.userInformation = response.data;
          this.addressString = `${this.userInformation.address.street}, ${this.userInformation.address.suite}, ${this.userInformation.address.city}, ${this.userInformation.address.zipcode}`;
          console.log(this.userInformation);
        });
    } catch (e) {
      console.log("Could not fetch Users", e);
    }
    try {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/users/${id}/albums?userId=${id}`
        )
        .then(response => {
          this.userAlbums = response.data;
        });
    } catch (e) {
      console.log("Could not fetch Users", e);
    }
  }
};
</script>
