<template>
  <div class="photos">
    <div class="photo-grid" v-for="photo in photoList" :key="photo.id">
      <Photo
        v-bind:id="photo.id"
        v-bind:url="photo.url"
        v-bind:thumbnailUrl="photo.thumbnailUrl"
        v-bind:name="photo.name"
      />
    </div>
  </div>
</template>

<script>
import Photo from "./Photo";

export default {
  name: "Photos",
  props: {
    photoList: Object
  },

  components: {
    Photo
  }
};
</script>

<style scoped>
.photo-grid {
  display: inline-block;
}
</style>
