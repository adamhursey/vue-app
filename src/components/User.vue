<template>
  <div class="user">
    <button id="userStyle" v-on:click="pushToUser">{{ userName }}</button>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    userId: Number,
    userName: String
  },

  methods: {
    pushToUser: function() {
      this.$router.push({ path: `/user/${this.userId}` });
    }
  }
};
</script>

<!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>
#userStyle {
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #000000;
  text-align: center;
  transition: all 0.15s;
  background-color: #ffffff;
  font-size: 150%;
}
#userStyle:hover {
  color: #50ffb1;
  background-color: #7fa597;
}
</style>
