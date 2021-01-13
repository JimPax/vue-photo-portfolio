<template>
  <div class="home">
    <Gallery :album-data="album" v-if="getLoadedAPI"/>
    <Footer/>
    <Modal v-if="getLoadedAPI"/>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Gallery from '@/components/Gallery.vue'
import Footer from '@/components/Footer.vue'
import Modal from '@/components/Modal.vue'

export default {
    name: 'Home',
    components: {
        Gallery,
        Footer,
        Modal
    },
    data: function() {
        return {
            album: [],
            category: '',
            getLoadedAPI: false
        }
    },
    created() {
            this.category = this.$route.params.category;
    },
    mounted() {
        axios.get(`/static/${this.category}.json`).then((response) => {
            this.album = response.data.album;
            this.getLoadedAPI = true;
        });
    }

}
</script>