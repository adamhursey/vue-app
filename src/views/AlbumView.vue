<template>
  <div class="AlbumInformation">
    <div class="Title">{{ albumInformation.title }}</div>
    <User v-bind:userId="userInformation.id" v-bind:userName="userInformation.name" />
    <Photos v-bind:photoList="albumPhotos" />
  </div>
</template>

<script>
import axios from "axios";
import User from "../components/User";
import Photos from "../components/Photos";

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
    User,
    Photos
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
          try {
            axios
              .get(
                `https://jsonplaceholder.typicode.com/users/${this.albumInformation.userId}`
              )
              .then(response => {
                this.userInformation = response.data;
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

<style scoped>
.Title {
  color: red;
}
</style>
