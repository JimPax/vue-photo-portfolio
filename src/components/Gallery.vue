<template>
  <section class="gallery">
        <h1 class="heading-primary gallery__heading">{{category}}</h1>
        <div class="gallery__btn-box">
            <router-link to="/" class="gallery__back-btn">Back to home</router-link>
        </div>
        <div class="gallery__container">
            <div class="gallery__item" v-for="(image, index) in album" :key="index">
                <img v-bind:src="require('../assets/img/art grafiti/' + image.url)" :alt="image.alt" class="gallery__image">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Gallery',
    props: ['albumData'],
    data: function() {
        return {
            album: this.albumData,
            category: ''
        }
    },
    created() {
            this.category = this.$route.params.category;
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles/components/_gallery.scss";
</style>