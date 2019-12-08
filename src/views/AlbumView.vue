<template>
  <div class="AlbumInformation">
    <div>Album Title: {{ albumInformation.title }}</div>
    <User v-bind:userId="userInformation.id" v-bind:userName="userInformation.name" />
    <div>Photos: {{ albumPhotos }}</div>
  </div>
</template>

<script>
import axios from "axios";
import User from "../components/User";

export default {
  name: "Albums",

  data() {
    return {
      albumInformation: {},
      albumPhotos: {},
      userInformation: {}
    };
  },

  components: {
    User
  },

  // Gets route params so that we can hit the API with that information later
  created() {
    const id = this.$route.params.id;

    // Fetches all Albums from API for album list
    try {
      axios
        .get(`https://jsonplaceholder.typicode.com/albums/${id}`)
        .then(response => {
          this.albumInformation = response.data;
          console.log(this.albumInformation);
          try {
            axios
              .get(
                `https://jsonplaceholder.typicode.com/users/${this.albumInformation.userId}`
              )
              .then(response => {
                this.userInformation = response.data;
                console.log(this.userInformation.name);
              });
          } catch (e) {
            console.log("Could not fetch User", e);
          }
        });
    } catch (e) {
      console.log("Could not fetch Album", e);
    }
    try {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/albums/1/photos?albumId=${id}`
        )
        .then(response => {
          this.albumPhotos = response.data;
          console.log(this.albumPhotos);
        });
    } catch (e) {
      console.log("Could not fetch photos", e);
    }
  }
};
</script>
