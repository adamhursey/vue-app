<template>
  <div>
    <div class="userContainer">
      <div class="name">{{ userInformation.name }}</div>
      <div class="userName">username: {{ userInformation.username }}</div>
      <div class="phone">{{ userInformation.phone }}</div>
      <div class="email">{{ userInformation.email }}</div>
      <div class="address">address: {{ this.addressString }}</div>
    </div>
    <div class="albumsContainer" v-for="(album, index) in userAlbums" :key="index">
      <Album v-bind:albumId="album.id" v-bind:albumTitle="album.title" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Album from "../components/Album";

export default {
  name: "Users",

  data() {
    return {
      userInformation: {},
      userAlbums: {},
      addressString: ""
    };
  },

  components: {
    Album
  },

  // Fetches all Users from API for user list
  created() {
    const id = this.$route.params.id;

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
      console.log("Could not fetch Albums", e);
    }
  }
};
</script>

<style scoped>
.userContainer {
  position: relative;
  height: 10vh;
  margin-bottom: 20px;
}

.name {
  position: absolute;
  font-size: 200%;
  top: 0;
  left: 0;
}
.phone {
  position: absolute;
  top: 50%;
  right: 0;
}

.email {
  position: absolute;
  bottom: 0;
  right: 0;
}
.userName {
  position: absolute;
  bottom: 0;
  left: 0;
}
.address {
  position: absolute;
  left: 0;
  top: 50%;
}
</style>
