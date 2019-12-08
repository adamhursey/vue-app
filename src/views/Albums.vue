<template>
  <div>
    <div class="albums" v-for="(album, index) in albumsList" :key="index">
      <Album v-bind:albumId="album.id" v-bind:albumTitle="album.title" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Album from "../components/Album";

export default {
  name: "Albums",

  components: {
    Album
  },

  data() {
    return {
      albumsList: []
    };
  },

  // Fetches all Albums from API for album list
  created() {
    try {
      axios
        .get("https://jsonplaceholder.typicode.com/albums/")
        .then(response => {
          this.albumsList = response.data;
        });
    } catch (e) {
      console.log("Could not fetch Users", e);
    }
  }
};
</script>
