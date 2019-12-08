<template>
  <div>
    <div class="users" v-for="(user, index) in usersList" :key="index">
      <User v-bind:userId="user.id" v-bind:userName="user.name" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import User from "../components/User";

export default {
  name: "Users",

  components: {
    User
  },

  data() {
    return {
      usersList: []
    };
  },

  // Fetches all Users from API for user list
  created() {
    console.log("created");
    try {
      axios
        .get("https://jsonplaceholder.typicode.com/users/")
        .then(response => {
          this.usersList = response.data;
        });
    } catch (e) {
      console.log("Could not fetch Users", e);
    }
  }
};
</script>
