<template>
  <div class="album">
    <button id="albumStyle" v-on:click="alertMe">{{ albumTitle }}</button>
  </div>
</template>

<script>
export default {
  name: "Album",
  props: {
    albumId: Number,
    albumTitle: String
  },
  methods: {
    alertMe: function() {
      alert(this.albumId);
    }
  }
};
</script>

<!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>
#albumStyle {
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
#albumStyle:hover {
  color: #50ffb1;
  background-color: #7fa597;
}
</style>
