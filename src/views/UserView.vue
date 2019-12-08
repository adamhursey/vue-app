<template>
  <div>user view</div>
</template>

<script>
// import axios from "axios";

export default {
  name: "Users",

  data() {
    return {
      usersList: []
    };
  },

  // Gets route params so that we can hit the API with that information later
  created() {
    console.log(this.$route.params);
  }

  // Fetches all Users from API for user list
  // created() {
  //   console.log("created");
  //   try {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/users/")
  //       .then(response => {
  //         this.usersList = response.data;
  //       });
  //   } catch (e) {
  //     console.log("Could not fetch Users", e);
  //   }
  // }
};
</script>
