<template>
  <div>album view</div>
</template>

<script>
// import axios from "axios";

export default {
  name: "Albums",

  data() {
    return {
      albumsList: []
    };
  },

  // Gets route params so that we can hit the API with that information later
  created() {
    console.log(this.$route.params);
  }

  // Fetches all Albums from API for album list
  // created() {
  //   try {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/albums/")
  //       .then(response => {
  //         this.albumsList = response.data;
  //       });
  //   } catch (e) {
  //     console.log("Could not fetch Users", e);
  //   }
  // }
};
</script>
