<template>
  <div>
    <img class="photo" v-on:click="pushToFull" v-bind:src="thumbnailUrl" v-bind:alt="name" />
  </div>
</template>

<script>
export default {
  name: "Photo",
  props: {
    id: Number,
    url: String,
    thumbnailUrl: String,
    name: String
  },

  methods: {
    pushToFull: function() {
      window.open(this.url, "_blank");
    }
  }
};
</script>

<style scoped>
.photo {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  max-width: 100%;
  transition: 0.2s;
}
.photo:hover {
  transform: scale(1.1);
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.5);
}
</style>
